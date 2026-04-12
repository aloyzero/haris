#!/bin/bash
echo "========================================"
echo "Security System - Quick Start"
echo "========================================"
echo ""
echo "This script will help you set up and run the security system."
echo ""
echo "Step 1: Installing frontend dependencies..."
echo "========================================"
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install frontend dependencies"
    exit 1
fi
echo ""
echo "Step 2: Installing backend dependencies..."
echo "========================================"
cd backend
pip install -r requirements.txt
if [ $? -ne 0 ]; then
    echo "Error: Failed to install backend dependencies"
    exit 1
fi
cd ..
echo ""
echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "To run the system:"
echo ""
echo "1. Start Backend (in a new terminal):"
echo "   cd backend"
echo "   python app.py"
echo ""
echo "2. Start Frontend (in another new terminal):"
echo "   npm run dev"
echo ""
echo "3. Open browser:"
echo "   http://localhost:5173"
echo ""
