import express from 'express';
import api from '../service/api';
import knex from 'knex';
import error from '../messages/erro';
import success from '../messages/success';

const listClient = async (req: express.Request, res: express.Response) => {
    try {
        const listClient: object = await knex('client');
        return res.status(200).json(listClient);
    } catch (error) {
        return res.status(404).json(error);
    }
};

const createClient = async (req: express.Request, res: express.Response) => {
    const { name, email, prone_number, address, cpf } = req.body;

    try {
        const emailExist: string = await await knex('client').where({ email }).first();
        if (emailExist) return res.status(403).json(error.emailExist);

        const cpfExist: string = await await knex('client').where({ cpf }).first();
        if (cpfExist) return res.status(403).json(error.cpfExist);

        const createClient = await knex('client').insert({
            name, email, prone_number, address, cpf
        });

        if (!createClient) return res.status(400).json(error.clientNotCreate);

        return res.status(201).json(success.clientCreate);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const updateClient = async (req: express.Request, res: express.Response) => {
    const { name, email, prone_number, address, cpf } = req.body;
    const { id } = req.params;

    try {
        const emailExist: string = await await knex('client').where({ email }).first();
        if (emailExist) return res.status(403).json(error.emailExist);

        const cpfExist: string = await await knex('client').where({ cpf }).first();
        if (cpfExist) return res.status(403).json(error.cpfExist);

        const updateClient = await knex('client').update({
            name, email, prone_number, address, cpf
        }).where({ id });

        if (!updateClient) return res.status(400).json(error.clientNotUpdated);

        return res.status(201).json(success.clientUpdated);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const deleteClient = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
        const existClient: number = await knex('client').where({ id }).first();
        if (!existClient) return res.status(404).json(error.notFound);

        const delClient = await knex('client').del().where({ id });
        if (!delClient) return res.status(404).json(error.clientDontDel);

        return res.status(200).json(success.clientDel);
    } catch (e) {
        return res.status(404).json(e);
    }
};

export default { listClient };