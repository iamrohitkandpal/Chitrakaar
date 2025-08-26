// Configuration for API endpoints
// In development with Vite proxy, use empty string to use relative URLs
// In production, use full URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.DEV ? "" : "https://chitrakaar.onrender.com");
