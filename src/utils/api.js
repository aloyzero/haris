const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchAlerts = async (limit = 50) => {
  try {
    const response = await fetch(`${API_BASE_URL}/alerts?limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch alerts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching alerts:', error);
    return [];
  }
};

export const fetchLatestAlert = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/alerts/latest`);
    if (response.status === 204) return null;
    if (!response.ok) throw new Error('Failed to fetch latest alert');
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest alert:', error);
    return null;
  }
};

export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/api/health`);
    if (!response.ok) return false;
    const data = await response.json();
    return data.status === 'healthy';
  } catch (error) {
    console.error('Backend not available:', error);
    return false;
  }
};

export const getVideoFeedUrl = () => {
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${baseUrl}/video_feed`;
};
