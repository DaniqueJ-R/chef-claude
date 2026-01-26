import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import express from 'express';
import proxy from 'express-http-proxy';
import handler from './api/chat.js';

const app = express();
const PORT = 3000;

console.log('Server starting...');

// Parse JSON bodies
app.use(express.json());

// Handle API routes
app.post('/api/chat', async (req, res) => {
    await handler(req, res);
});

// Proxy all other requests to Vite dev server
app.use('/', proxy('http://localhost:5173', {
    proxyReqPathResolver: (req) => req.originalUrl,
}));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Make sure Vite is running on port 5173 with: npm run dev`);
});
