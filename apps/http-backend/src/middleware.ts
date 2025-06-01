import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

declare global{
    namespace Express{
    interface Request {
        userId?: number;
    }
}
}

export function middleware(req:Request, res:Response, next:NextFunction){
       const token = req.headers ["authorization"] ??"";
 
       try {
       const decoded = jwt.verify(token, JWT_SECRET) as {userId: number};
           req.userId= decoded.userId;
           next();
       } catch {
           res.status(401).json({
            message:"Unauthorized"
           });
       }
    }
