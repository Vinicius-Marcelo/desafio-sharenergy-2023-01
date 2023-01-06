import express from 'express';
import login from './controllers/login';
import client from './controllers/client';
import check from './middlewares/checkLogin';

const routes = express();

routes.post("/", login.login);
routes.use(check.checkLogin);

routes.get("/clent", client.listClient);

export default routes;