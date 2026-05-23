import { Pool } from 'pg';
import config from '../config';


export const pool = new Pool({
    connectionString: config.connection_string
})

export const initDB = async () => {

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

    await pool.query(`
      CREATE TABLE IF NOT EXISTS issues (

        id SERIAL PRIMARY KEY,
        title VARCHAR(150)NOT NULL,
        description TEXT NOT NULL
        CHECK (
          length(description) >= 20
        ),
        type VARCHAR(20) NOT NULL
        CHECK (
          type IN (
            'bug',
            'feature_request'
          )
        ),
        status VARCHAR(20)
        DEFAULT 'open'
        CHECK (
          status IN (
            'open',
            'in_progress',
            'resolved'
          )
        ),

        reporter_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

        console.log(
            "Issue table created"
        );
    } catch (error) {
        console.log(error);
    }
}