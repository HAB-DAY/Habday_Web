import axios from 'axios';

// apis
export const BASE_URL = process.env.NEXT_PUBLIC_END ?? '';

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export { client };
