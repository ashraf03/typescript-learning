import express, { type Request, type Response } from "express"
import { loginUser } from "./auth.service";

const login = async (
  req: Request,
  res: Response
) => {

 try {

   const { email, password } =
      req.body;

   const result =
      await loginUser(
         email,
         password
      );

   res.status(200).json({
      success:true,
      message:
      "Login successful",
      data: result
   });

 } catch(error:any){

   res.status(400).json({
      success:false,
      message:error.message
   });

 }

};

export const authController={
   login
};