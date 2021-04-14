import { Router, Request, Response } from 'express';

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'postgrespassword',
    database: 'postgresdb',
    port: '5300'
});

const router = Router();

router.get('/mensajesgit', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git dos'
    });
});

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
        // mensaje: 'POST listo!'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id

    res.json({
        ok: true,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});

router.post('/add', (req: Request, res: Response) => {
    const valor = req.body.valor;
    const response = pool.query('INSERT INTO test (valor) VALUES ($1)', [valor]);

    res.json({
        ok: true,
        valor
    })
});

export default router;