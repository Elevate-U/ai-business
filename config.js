// config.js

// WARNING: This is not a secure way to store API keys.
// This key is visible to anyone who inspects the site's code.
// For a real-world application, you should use a backend proxy to protect your API key.
const API_KEY = 'c1fcdb4fd429f4908bd731c904c37c68';

// Using /img/ prefix which gets rewritten to TMDB image URLs by Vercel
const IMAGE_BASE_URL = '/img/t/p/w500';
const ORIGINAL_IMAGE_BASE_URL = '/img/t/p/original';
const API_BASE_URL = 'https://api.themoviedb.org/3'; 