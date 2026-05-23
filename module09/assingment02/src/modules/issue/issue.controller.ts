import { Request, Response } from "express";

import {
    issueService
}
    from "./issue.service";

const createIssue =
    async (
        req: Request,
        res: Response
    ) => {

        try {

            const user =
                req.user as any;

            const result =
                await issueService
                    .createIssue(
                        req.body,
                        user.id
                    );

            res.status(201)
                .json({

                    success: true,

                    message:
                        "Issue created successfully",

                    data: result

                });

        }
        catch (error: any) {

            res.status(400)
                .json({

                    success: false,

                    message:
                        error.message

                });

        }

    };
const getAllIssues = async (req: Request, res: Response) => {
  try {
    const result = await issueService.getAllIssues(req.query);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleIssue = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = await issueService.getSingleIssue(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Issue not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateIssue = async (req: any, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = req.user;

    const result = await issueService.updateIssue(
      id,
      user,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Issue updated successfully",
      data: result,
    });

  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteIssue = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await issueService.deleteIssue(id);

    res.status(200).json({
      success: true,
      message: "Issue deleted successfully",
    });

  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const issueController = {
    createIssue,
    getAllIssues,
    getSingleIssue,
    updateIssue,
    deleteIssue
};