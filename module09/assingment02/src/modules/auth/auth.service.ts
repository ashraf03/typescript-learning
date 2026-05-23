import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";
import {pool} from "../../db";

export const loginUser = async (
  email: string,
  password: string
) => {

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  const user = result.rows[0];

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatched =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!passwordMatched) {
    throw new Error(
      "Incorrect password"
    );
  }

  const jwtPayload = {
    id: user.id,
    name: user.name,
    role: user.role
  };

  const token = jwt.sign(
    jwtPayload,
    config.secret as string,
    {
      expiresIn: "7d"
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at
    }
  };
};