# 🛡️ HARIS / VIGIL·AI

**HARIS (Human Activity Recognition & Intelligent Surveillance)** is an AI-powered real-time surveillance platform that combines computer vision, pose estimation, and interactive analytics to provide intelligent security monitoring through a modern web dashboard.

The system leverages **YOLOv8** for object detection and **MediaPipe** for human pose estimation, enabling real-time detection of people, objects, and behavior-based events. Processed video streams and analytics are delivered to a decoupled React dashboard for live monitoring, alert management, and incident analysis.

---

## ✨ Features

### 🎯 Real-Time Object Detection

* Detects people and common objects using YOLOv8.
* Displays live bounding boxes and confidence scores.
* Processes video streams directly from connected cameras.
* Supports real-time visual monitoring.

### 🧍 Human Pose & Activity Analysis

* Full-body tracking using MediaPipe Pose Estimation.
* Detects behavior-based events such as:

  * Hands in pockets
  * Prolonged inactivity
  * Unusual posture patterns
  * Area monitoring
* Provides contextual awareness beyond traditional object detection.

### 🚨 Alert Management

* Automatically generates alerts for detected events.
* Stores incidents in an SQLite database.
* Maintains a searchable event history.
* Supports rapid incident review and investigation.

### 📊 Analytics Dashboard

* Live camera monitoring interface.
* Event timeline visualization.
* Interactive charts and statistics.
* Historical alert analysis.
* Responsive and modern UI experience.

### 🔍 Search & Filtering

* Filter events by type, date, and timestamp.
* Instant client-side searching.
* Fast navigation through historical incidents.

---

## 🏗️ System Architecture

```text
Camera Feed
     │
     ▼
OpenCV Processing
     │
     ▼
YOLOv8 + MediaPipe
     │
     ▼
Flask Backend API
     │
 ┌───┴────┐
 ▼        ▼
MJPEG   SQLite
Stream Database
     │
     ▼
React Dashboard
```

---

## 📂 Project Structure

```text
haris-OTC/
│
├── backend/
│   ├── app.py
│   ├── haris.py
│   └── instance/
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── hooks/
    │   └── components/
    └── public/
```

### Backend

| File        | Description                                      |
| ----------- | ------------------------------------------------ |
| `app.py`    | Flask API and MJPEG streaming endpoints          |
| `haris.py`  | AI inference pipeline using YOLOv8 and MediaPipe |
| `instance/` | SQLite database storage                          |

### Frontend

| Directory     | Description                              |
| ------------- | ---------------------------------------- |
| `pages/`      | Main application views                   |
| `hooks/`      | Custom React hooks for API communication |
| `components/` | Reusable UI components                   |

---

## 🚀 Installation

### 1. Backend Setup

```bash
cd backend

python -m venv venv
```

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
python app.py
```

Backend server:

```text
http://127.0.0.1:5000
```

---

### 2. Frontend Setup

```bash
cd frontend

npm install
npm run dev
```

Frontend server:

```text
http://localhost:5173
```

---

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* Recharts
* Lucide React

### Backend

* Python
* Flask
* SQLAlchemy
* OpenCV

### AI & Computer Vision

* YOLOv8
* MediaPipe Pose Estimation

### Database

* SQLite

---

## 📸 Screenshots

Add screenshots or GIF demonstrations here.

```md
![Dashboard](docs/dashboard.png)

![Live Monitoring](docs/live-feed.png)
```

---

## 🔮 Future Improvements

* Multi-camera support
* User authentication and role management
* Cloud deployment
* Email and SMS notifications
* Custom monitoring zones
* Advanced behavior recognition
* Exportable incident reports
* Real-time analytics enhancements

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Contributors

Developed as part of the **One Tech Crew (OTC)** initiative, focusing on AI-driven surveillance, computer vision, and real-time analytics.
