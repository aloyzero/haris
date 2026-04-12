@echo off
echo ========================================
echo Security System - Quick Start
echo ========================================
echo.
echo This script will help you set up and run the security system.
echo.
echo Step 1: Installing frontend dependencies...
echo ========================================
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo.
echo Step 2: Installing backend dependencies...
echo ========================================
cd backend
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Error: Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..
echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To run the system:
echo.
echo 1. Start Backend (in a new terminal):
echo    cd backend
echo    python app.py
echo.
echo 2. Start Frontend (in another new terminal):
echo    npm run dev
echo.
echo 3. Open browser:
echo    http://localhost:5173
echo.
pause
