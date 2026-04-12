# Backend & Frontend Integration Guide

## What Was Connected

### Backend (Python Flask)
**Location**: `backend/app.py`

The backend now provides:
- **YOLO Object Detection**: Detects people and objects (bags, phones, etc.)
- **MediaPipe Pose Detection**: Tracks hand positions to detect pockets/suspicious behavior
- **Real-time Alerts**: Generates alerts when suspicious behavior is detected
- **Video Stream**: Broadcasts live camera feed as MJPEG
- **REST API**: Endpoints for fetching alerts and health checks

**Key Features**:
- Automatic cooldown to prevent alert spam (3 seconds between same alerts)
- Threat level scoring (HIGH/MEDIUM/LOW)
- Alert history stored in memory (last 100 alerts)
- Multi-threaded design (detection loop + Flask server)

### Frontend (React + Vite)
**Location**: `src/`

Updated components:
- **CameraFeed.jsx**: Now streams real video from backend instead of placeholder
- **LivePage.jsx**: Fetches real alerts from backend (polls every 2 seconds)
- **AlertsPage.jsx**: Shows historical alerts from backend (polls every 3 seconds)
- **api.js**: New utility file with backend API functions

## How They Communicate

### Data Flow

```
Camera Input
    ↓
Backend Detection (YOLO + MediaPipe)
    ↓
Alert Generation
    ↓
REST API Endpoints
    ├── /api/alerts → Get all alerts
    ├── /api/alerts/latest → Get latest alert
    └── /video_feed → Stream video
    ↓
Frontend Polling
    ├── Fetch alerts every 2-3 seconds
    ├── Display in real-time
    └── Stream video to user
```

### API Endpoints

#### 1. Get All Alerts
```javascript
// Frontend usage
const alerts = await fetchAlerts(limit);

// HTTP
GET http://localhost:5000/api/alerts?limit=50

// Response
[
  {
    id: "ALT-12345",
    cameraId: "CAM-01",
    timestamp: "14:32:07",
    behavior: "Both Hands in Pockets",
    threatLevel: "MEDIUM",
    score: 65,
    description: "...",
    ...
  }
]
```

#### 2. Get Latest Alert
```javascript
// Frontend usage
const alert = await fetchLatestAlert();

// HTTP
GET http://localhost:5000/api/alerts/latest

// Response
{ alert object } or 204 No Content
```

#### 3. Video Stream
```javascript
// Frontend usage
src={getVideoFeedUrl()} // Returns "http://localhost:5000/video_feed"

// HTTP
GET http://localhost:5000/video_feed

// Response
Multipart MJPEG stream
```

#### 4. Health Check
```javascript
// Frontend usage
const isHealthy = await checkBackendHealth();

// HTTP
GET http://localhost:5000/api/health

// Response
{ status: "healthy", models_ready: true }
```

## Configuration

### Backend Configuration
Edit `backend/app.py`:

```python
# YOLO model size (n=nano, s=small, m=medium, l=large)
YOLO_MODEL_NAME = "yolov8n.pt"

# Detection threshold (0.0-1.0)
PROXIMITY_RATIO = 0.15

# Alert cooldown in seconds
alert_cooldown = 3

# Server config
app.run(host='0.0.0.0', port=5000)
```

### Frontend Configuration
Create `.env.local` (copy from `.env.example`):

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Running Locally

### Terminal 1: Backend
```bash
cd backend
pip install -r requirements.txt  # First time only
python app.py
```

**Expected output:**
```
Initializing backend...
Loading YOLO model...
Loading MediaPipe Pose model...
Models initialized successfully!
Detection loop started...
Starting Flask server on http://localhost:5000
```

### Terminal 2: Frontend
```bash
npm install  # First time only
npm run dev
```

**Expected output:**
```
VITE v5.0.0  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Terminal 3: Browser
```
http://localhost:5173
```

## Testing the Connection

### 1. Check Backend is Running
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"status": "healthy", "models_ready": true}
```

### 2. Check Video Feed
Open in browser:
```
http://localhost:5000/video_feed
```

You should see live camera feed

### 3. Check Alerts API
```bash
curl http://localhost:5000/api/alerts
```

Expected response:
```json
[]  # Empty initially, fills as detections happen
```

## Troubleshooting

### Issue: Frontend shows "WAITING FOR BACKEND"
**Cause**: Backend is not running or not accessible

**Solution**:
1. Start backend: `cd backend && python app.py`
2. Check port 5000 is open: `lsof -i :5000` or `netstat -ano | findstr :5000`
3. Check firewall isn't blocking port 5000

### Issue: No video feed showing
**Cause**: Camera not accessible by backend

**Solution**:
1. Check camera is not in use by another app
2. Linux: Verify `/dev/video0` exists
3. Windows: Check Device Manager for camera
4. Restart the backend

### Issue: No alerts appearing
**Cause**: Detection threshold too high or no people in view

**Solution**:
1. Adjust `PROXIMITY_RATIO` in backend
2. Check `alert_cooldown` isn't preventing alerts
3. Look for people/objects in camera feed

### Issue: High CPU usage
**Cause**: YOLO model size too large

**Solution**:
Change `YOLO_MODEL_NAME = "yolov8n.pt"` (nano is fastest)

## Advanced Customization

### Adding New Detection Types

1. **Backend** (`backend/app.py`):
```python
# In run_detection() function:
if some_condition:
    alert_key = "new_alert_type"
    if alert_key not in last_alert_time or time.time() - last_alert_time[alert_key] > alert_cooldown:
        create_alert(
            "Alert Name",
            "HIGH",  # Threat level
            "Description",
            score  # 0-100
        )
        last_alert_time[alert_key] = time.time()
```

2. **Frontend**: Components automatically handle new alert types

### Using Remote Backend

1. Start backend on server machine (ensure firewall allows port 5000)
2. On client machine, set environment variable:
```bash
export REACT_APP_API_URL=http://server-ip:5000/api
npm run dev
```

### Adding WebSocket for Real-time Updates

Replace polling with WebSocket in `src/utils/api.js`:
```javascript
const socket = new WebSocket('ws://localhost:5000/alerts');
socket.onmessage = (event) => {
  const alert = JSON.parse(event.data);
  // Update UI immediately
};
```

Update `backend/app.py` to emit alerts via WebSocket when detected.

## Performance Optimization

### For Faster Detection
```python
# Use smaller YOLO model
YOLO_MODEL_NAME = "yolov8n.pt"  # nano

# Reduce confidence threshold
yolo_results = yolo_model(frame, conf=0.3)  # Lower = more detections

# Skip frames
if frame_index % 2 == 0:  # Process every 2nd frame
    # detect...
```

### For Better Accuracy
```python
# Use larger YOLO model
YOLO_MODEL_NAME = "yolov8l.pt"  # large

# Increase confidence threshold
yolo_results = yolo_model(frame, conf=0.6)  # Higher = only confident detections
```

## Files Modified/Created

### New Files
- `backend/app.py` - Flask backend server
- `backend/requirements.txt` - Python dependencies
- `src/utils/api.js` - Frontend API utility functions
- `SETUP.md` - Setup instructions
- `.env.example` - Environment configuration template
- `setup.bat` / `setup.sh` - Quick setup scripts

### Modified Files
- `src/pages/LivePage.jsx` - Now fetches real alerts
- `src/pages/AlertsPage.jsx` - Now fetches real alerts
- `src/components/CameraFeed.jsx` - Now streams real video

### Unchanged
- All other frontend components work as before
- UI/styling remains the same
- Mock data still available as fallback

## Next Steps

1. **Run locally** following the quick start guide
2. **Test detections** by moving objects/hands in camera view
3. **Customize alerts** for your specific use case
4. **Deploy backend** to a server for 24/7 monitoring
5. **Deploy frontend** to a static hosting service

For questions, check the logs in terminal windows where backend/frontend are running.
