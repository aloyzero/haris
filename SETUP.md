# Security System - Backend & Frontend Setup

## Overview
This is a real-time security monitoring system with:
- **Backend**: Python Flask server with YOLO object detection + MediaPipe pose detection
- **Frontend**: React + Vite UI for live monitoring and alerts

## Quick Start

### Prerequisites
- Python 3.8+ with pip
- Node.js 16+
- Webcam/Camera connected to your system

### 1. Backend Setup

#### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Run Backend Server
```bash
python app.py
```

The backend will:
- Initialize YOLO and MediaPipe models (first run takes ~2-3 minutes)
- Start Flask server on `http://localhost:5000`
- Access camera feed via `/video_feed` endpoint
- Expose alerts via `/api/alerts` endpoint
- Check health via `/api/health` endpoint

**Expected output:**
```
Downloading MediaPipe pose model...
Loading YOLO model...
Loading MediaPipe Pose model...
Models initialized successfully!
Detection loop started...
Starting Flask server on http://localhost:5000
```

### 2. Frontend Setup

#### Install Dependencies
```bash
npm install
```

#### Run Development Server
```bash
npm run dev
```

The frontend will start on `http://localhost:5173` and automatically connect to the backend at `http://localhost:5000`.

### 3. Access the Application

Open your browser and go to:
```
http://localhost:5173
```

## Features

### Detection Capabilities

The backend detects:

1. **Holding Suspicious Objects**
   - Alert Level: HIGH (score 85)
   - Detects when a person holds objects (bags, packages, etc.)

2. **Both Hands in Pockets**
   - Alert Level: MEDIUM (score 65)
   - Detects suspicious hand concealment

3. **One Hand in Pocket**
   - Alert Level: LOW (score 45)
   - Detects partial hand concealment

### Frontend Pages

- **LIVE**: Real-time camera feed with AI analysis sidebar
- **ALERTS**: Historical alert log with filtering by threat level

## API Endpoints

### Get All Alerts
```
GET http://localhost:5000/api/alerts?limit=50
```

### Get Latest Alert
```
GET http://localhost:5000/api/alerts/latest
```

### Video Stream (MJPEG)
```
GET http://localhost:5000/video_feed
```

### Health Check
```
GET http://localhost:5000/api/health
```

## Customization

### Backend Configuration

Edit [backend/app.py](backend/app.py):

```python
YOLO_MODEL_NAME = "yolov8n.pt"  # Change to yolov8s.pt, yolov8m.pt for better accuracy
PROXIMITY_RATIO = 0.15  # Adjust object proximity detection threshold
alert_cooldown = 3  # Seconds between same-type alerts
```

### Frontend Configuration

Edit [src/utils/api.js](src/utils/api.js):

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

Or set environment variable:
```bash
export REACT_APP_API_URL=http://your-backend-ip:5000/api
```

## Troubleshooting

### Backend won't start
```
ModuleNotFoundError: Could not find module 'mediapipe'
```
**Solution**: Run `pip install -r requirements.txt` in the backend directory

### Frontend shows "Waiting for Backend"
- Ensure backend is running on port 5000
- Check network connectivity if accessing from different machine
- Set correct `REACT_APP_API_URL` environment variable

### No camera feed showing
- Ensure camera is connected and accessible
- Check permissions: `ls /dev/video*` (Linux) or Device Manager (Windows)
- Stop other applications using the camera

### Models downloading very slowly
- First run downloads ~150MB of models
- This is normal and happens once
- Subsequent runs will be instant

## Development

### Production Build
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

## Project Structure

```
security-main/
├── backend/
│   ├── app.py              # Flask server with detection logic
│   ├── requirements.txt     # Python dependencies
│   └── [pose model cache]   # Downloaded models
├── src/
│   ├── components/
│   │   ├── CameraFeed.jsx      # Live video stream display
│   │   ├── AnalysisSidebar.jsx # Alert details panel
│   │   ├── AlertCard.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── LivePage.jsx        # Live monitoring view
│   │   └── AlertsPage.jsx      # Historical alerts
│   ├── utils/
│   │   └── api.js              # Backend API calls
│   ├── data/
│   │   └── mockAlerts.js       # Sample data (for fallback)
│   └── App.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Performance Notes

- YOLO inference: ~50-100ms per frame
- MediaPipe pose: ~30-50ms per frame
- Total pipeline: ~30 FPS
- Alert cooldown: 3 seconds (prevents spam)

## License
Check project root for license information.
