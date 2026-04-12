export const mockAlerts = [
  { 
    id: 'ALT-101', cameraId: 'CAM-01', timestamp: '14:32:07', behavior: 'Loitering near restricted zone', threatLevel: 'HIGH', score: 85, status: 'UNREAD',
    date: '2024.03.14',
    time: '14:32:07',
    location: 'Sector B / North Entrance',
    behaviors: ['Loitering', 'Perimeter breach'],
    description: 'Subject remained stationary near the restricted zone for over 4 minutes, made two attempts to approach the entry barrier, and was flagged for evasive posture.',
    mediaType: 'video',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    screenshotUrl: 'https://picsum.photos/seed/ALT-101/640/360?grayscale'
  },
  { 
    id: 'ALT-102', cameraId: 'CAM-04', timestamp: '14:28:15', behavior: 'Rapid movement in parking lot', threatLevel: 'MEDIUM', score: 60, status: 'UNREAD',
    date: '2024.03.14',
    time: '14:28:15',
    location: 'Sector A / West Parking',
    behaviors: ['Rapid movement', 'Unpredictable path'],
    description: 'Multiple subjects identified moving at high speed across the western parking quadrant. No immediate perimeter breach detected, but pacing indicates possible scouting.',
    mediaType: 'screenshot',
    videoUrl: '',
    screenshotUrl: 'https://picsum.photos/seed/ALT-102/640/360?grayscale'
  },
  { 
    id: 'ALT-103', cameraId: 'CAM-02', timestamp: '14:15:33', behavior: 'Perimeter breach detected', threatLevel: 'HIGH', score: 92, status: 'SENT',
    date: '2024.03.14',
    time: '14:15:33',
    location: 'Sector C / East Fence',
    behaviors: ['Perimeter breach', 'Climbing'],
    description: 'Unauthorized subject scaled the eastern perimeter fence. Activity triggered secondary motion sensors in Zone 3.',
    mediaType: 'video',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    screenshotUrl: 'https://picsum.photos/seed/ALT-103/640/360?grayscale'
  },
  { 
    id: 'ALT-104', cameraId: 'CAM-07', timestamp: '13:55:10', behavior: 'Unauthorized vehicle entry', threatLevel: 'HIGH', score: 88, status: 'SENT',
    date: '2024.03.14',
    time: '13:55:10',
    location: 'Sector D / Loading Dock',
    behaviors: ['Unauthorized vehicle', 'Tailgating'],
    description: 'Unregistered black SUV bypassed security checkpoint by tailgating an authorized delivery truck.',
    mediaType: 'video',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    screenshotUrl: 'https://picsum.photos/seed/ALT-104/640/360?grayscale'
  },
  { 
    id: 'ALT-105', cameraId: 'CAM-03', timestamp: '13:40:22', behavior: 'Multiple individuals gathering', threatLevel: 'MEDIUM', score: 55, status: 'UNREAD',
    date: '2024.03.14',
    time: '13:40:22',
    location: 'Sector B / Courtyard',
    behaviors: ['Gathering', 'Lingering'],
    description: 'Group of 4 individuals congregating in the central courtyard exceeding the standard 2-minute threshold.',
    mediaType: 'screenshot',
    videoUrl: '',
    screenshotUrl: 'https://picsum.photos/seed/ALT-105/640/360?grayscale'
  },
  { 
    id: 'ALT-106', cameraId: 'CAM-08', timestamp: '12:12:05', behavior: 'Object left unattended', threatLevel: 'LOW', score: 25, status: 'SENT',
    date: '2024.03.14',
    time: '12:12:05',
    location: 'Sector A / Main Lobby',
    behaviors: ['Unattended object'],
    description: 'A backpack was left near the seating area. Subject departed the camera view without retrieving the item.',
    mediaType: 'screenshot',
    videoUrl: '',
    screenshotUrl: 'https://picsum.photos/seed/ALT-106/640/360?grayscale'
  },
  { 
    id: 'ALT-107', cameraId: 'CAM-01', timestamp: '11:45:00', behavior: 'Repeated pacing', threatLevel: 'LOW', score: 30, status: 'SENT',
    date: '2024.03.14',
    time: '11:45:00',
    location: 'Sector B / North Entrance',
    behaviors: ['Pacing', 'Lingering'],
    description: 'Subject observed pacing back and forth in front of the main entry doors. No hostile actions detected.',
    mediaType: 'video',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    screenshotUrl: 'https://picsum.photos/seed/ALT-107/640/360?grayscale'
  },
  { 
    id: 'ALT-108', cameraId: 'CAM-05', timestamp: '10:30:18', behavior: 'Access attempt (failed)', threatLevel: 'HIGH', score: 78, status: 'SENT',
    date: '2024.03.14',
    time: '10:30:18',
    location: 'Sector C / Server Room',
    behaviors: ['Access failure', 'Forced entry attempt'],
    description: 'Subject repeatedly attempted to scan an invalid badge at the server room access point, followed by physical manipulation of the handle.',
    mediaType: 'screenshot',
    videoUrl: '',
    screenshotUrl: 'https://picsum.photos/seed/ALT-108/640/360?grayscale'
  },
];
