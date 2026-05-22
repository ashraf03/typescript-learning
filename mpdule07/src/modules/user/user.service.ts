import { pool } from "../../db"
import type { IUser } from "./user.interface";
import bcrypt from "bcryptjs";

const createUserIntoDB = async (payload:IUser) => {
    const { name, email, password, age, role } = payload;

    const salt = await bcrypt.genSalt(15);
    const hasPassword = await bcrypt.hash(password, salt);

    console.log(hasPassword);

    const result = await pool.query(`
    INSERT INTO users(name, email, password, age, role) VALUES($1, $2, $3, $4, COALESCE($5, 'user'))
    RETURNING *
    `, [name, email, hasPassword, age, role]
    );

    delete result.rows[0].password;
    return result;
}

const getAllUsersFromDB = async() => {
    
    const result = await pool.query(`
        SELECT * FROM Users
    `);

    return result;
}

const getSingleUserFromDB = async(id: string) => {
    const result = await pool.query(
      `SELECT * FROM users WHERE id=$1`,
      [id],
    );
    return result
}

const updatedUserDB = async(payload:IUser, id:string) => {
    const {name, password, age, is_active} = payload;
    const result = await pool.query(`
      UPDATE 
      users 
      SET 
      name=COALESCE($1, name),
      password=COALESCE($2, password),
      age=COALESCE($3, age),
      is_active=COALESCE($4, is_active),
      WHERE id=$5 RETURNING *
    `, []);
    return result;
}

const deleteUserDB = async(id: string) => {
    
    const result = await pool.query(
      `DELETE FROM users WHERE id = $1`, [id]
    );
    return result;
}
export const userService = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updatedUserDB,
    deleteUserDB,
}