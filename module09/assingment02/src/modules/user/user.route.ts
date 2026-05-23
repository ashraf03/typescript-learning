import { Router, type Request } from "express";
import app from "../../db/app";
import Response from 'express';
import { userController } from "./user.controller";

const router = Router();


router.post("/signup", userController.createUser)


export const userRoute = router