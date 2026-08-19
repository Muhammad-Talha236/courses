import dotenv from 'dotenv';
import app from './app.js';
import pool from './config/db.js';
dotenv.config();
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await pool.query('SELECT 1');

    console.log('Database connected successfully!');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};
startServer();