import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDb from './mongodb/connect.js';
import imageRoutes from './routes/imageRoutes.js';
import generationRoutes from './routes/generationRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // This parses JSON request bodies

app.use('/api/v1/image', imageRoutes);
app.use('/api/v1/generation', generationRoutes);

app.get('/', async (req, res) => {
    res.send('Hello, World!');
})

const startServer = async () => {
    try {
        connectDb(process.env.MONGODB_URL);
        const port = process.env.PORT || 8080;
        app.listen(port, () => console.log(`Server Started on port ${port}`));
    } catch (err) {
        console.log(err);
    }
}

startServer();
