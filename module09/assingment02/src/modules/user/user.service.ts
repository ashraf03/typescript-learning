import config from "../../config";
import { pool } from "../../db";
import type { IUser } from "./user.interface";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"



const createUserIntoDB = async(payload: IUser) => {
    // console.log(payload)
    const { name, email, password } = payload;

    const hashPassword = bcrypt.hashSync(password, 10);
    
    const result = await pool.query(
        `INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *`,
        [name, email, hashPassword] 
    );

    delete result.rows[0].password;
    return result;
}


export const userService = {
    createUserIntoDB,
}