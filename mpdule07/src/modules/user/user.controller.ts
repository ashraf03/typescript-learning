import { pool } from "../../db";
import express, { type Request, type Response } from "express"
import { userService } from "./user.service";
import { senResponse } from "../../utility/sendResponse";

const createUser = async(req: Request, res: Response) => {
  // console.log(req.body)
//   const { name, email, password, age } = req.body;
 
    try {
    const result = await userService.createUserIntoDB(req.body);
    // console.log(result);

    senResponse(res, {
      statusCode:201,
      success: true,
      message: "User created successfully!",
      data: result.rows[0]
    })

    } catch(error:any) {
        res.status(500).json({
        success: false,
        message: error.message,
        error: error
    })
    }
    
}
const getAllUser =  async(req: Request, res: Response) => {
  console.log("Controller", req.user)
  try{
    const result = await userService.getAllUsersFromDB()
    res.status(200).json({
      success: true,
      message: "User retrived successfully!",
      data: result.rows
    })
  } catch(error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error
    })
  }
}

const getSingleUser = async(req: Request, res: Response)=> {
  const {id} = req.params;
  try {
    const result = await userService.getSingleUserFromDB(id as string)
    if (result.rows.length === 0) {
      res.status(404).json({
      success: false,
      message: "User Not Found",
      data: {}
      })
    }
    res.status(200).json({
      success: true,
      message: "User retrived successfully!",
      data: result.rows[0]
    })
  }catch(error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error
    })
  }
}

const updatedUser = async(req: Request, res:Response) => {
  const { id } = req.params;
//   const {name, password, age, is_active} = req.body;

  // console.log("Id : ", id);
  // console.log({name, password, age, is_active});

  try {
    const result = await userService.updatedUserDB(req.body, id as string);

    if (result.rows.length === 0) {
      res.status(404).json({
      success: false,
      message: "User Not Found",
      data: {}
    })
    }
    // console.log(result);
    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: result.rows[0]
    })
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    })
  }
}

const deleteUser = async() => {
     async(req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = userService.deleteUserDB(id as string)
    console.log(result);
    
    if(result.rowCount === 0) {
      res.status(404).json({
      success: false,
      message: "User Not Found",
      data: {}
    })
  }
    res.status(200).json({
      success: true,
      message: "User retrived successfully!",
      data: {}
    })
  } catch (error: any) {
     res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    })
  }
}
}
export const userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updatedUser,
    deleteUser,
}
