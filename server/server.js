import 'dotenv/config';
import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/dbConfig.js';
import productRouter from './routes/productRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

// Routers
app.use(express.json());
app.use('/api/products', productRouter);
app.use(express.static(path.join(__dirname, ".." , "client", "dist")));

const startApp = async () => {
    try {
        await connectDB();

        console.log('Database connected successfully.');

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, "..", 'client', 'dist', 'index.html'));
        });

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server is listening on PORT: ${PORT}.`)
        })
    } catch (error) {
        console.error('Failed to connect to the database.', error);
        process.exit(1);       
    }
}

startApp();