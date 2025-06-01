import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            userId?: number;
        }
    }
}
export declare function middleware(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=middleware.d.ts.map