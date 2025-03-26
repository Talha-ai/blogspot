import axios from 'axios';

// Base configuration for your API
axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
axios.defaults.withCredentials = true; // Important for session management
