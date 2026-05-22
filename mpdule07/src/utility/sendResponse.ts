import type { Request, Response } from "express"

type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
    error?: any;
}

export const senResponse = <T>(res: Response, data: TResponse<T>) => {
     res.status(data).json({
            success: data.success,
            message: data.message,
            data: data.data,
            error: data.error,
        })
}
