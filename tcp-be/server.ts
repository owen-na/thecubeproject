import { Pool } from 'pg'; // refer to stockbets if needed

const pool = new Pool({  
    connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = { pool };