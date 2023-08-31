import { Request, Response } from 'express';
import { Result, validationResult } from 'express-validator';

export function validarCampos(
    req: Request,
    res: Response,
    next: () => void) {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    return next();
}
