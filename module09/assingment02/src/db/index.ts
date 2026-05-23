import { Pool } from 'pg';
import config from '../config';


export const pool = new Pool({
    connectionString: config.connection_string
})

export const initDB = async() => {
    
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        age INT,
        role VARCHAR(50) DEFAULT 'contributor',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `); 
    } catch (error) {
        console.log(error);
    }
}