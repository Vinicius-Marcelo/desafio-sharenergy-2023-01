import express from 'express';

const checkClient = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { name, email, prone_number, address, cpf } = req.body;
};