import express from 'express';
import error from '../messages/erro'

const checkLogin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json(error.unauthorized);
    next();
};

export default { checkLogin };