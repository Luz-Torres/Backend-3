import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT || 8080;
const CONNECTION = mongoose.connect(`mongodb+srv://lxz:adminx2@cluster0.x8smpie.mongodb.net/?appName=Cluster0`)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);


app.get('/', (req, res) => {
    res.send(`
    <h1> API funcionando correctamente</h1>
    <p>Rutas disponibles:</p>
    <ul>
        <li>/api/users</li>
        <li>/api/pets</li>
        <li>/api/adoptions</li>
        <li>/api/sessions</li>
        <li>/api/mocks</li>
    </ul>
    `);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
