import express from 'express';
import erro from '../messages/erro';
import jwt from 'jsonwebtoken';

const login = async (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    try {
        if (username !== process.env.USERNAME_LOGIN || password !== process.env.PASSWORD_LOGIN) {
            return res.status(401).json(erro.loginWrong);
        };

        const token = jwt.sign({ id: username }, password, { expiresIn: '10h' });
        return res.status(200).json({
            token, username
        });
    } catch (error) {
        return res.status(401).json(erro.unauthorized);
    }
};

export default { login };