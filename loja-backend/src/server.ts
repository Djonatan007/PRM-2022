import express from "express";
import cors from "cors";
import { AppDataSource } from './data-source';

const app = express();

const PORT = 3300;

//middlewares
app.use(cors());
app.use(express.json());

//Se conectar no banco, sobe a aplicação
AppDataSource.initialize().then(() => {

    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`);
    })

}).catch(error => {
    console.log('Ops, não conectei no banco de dados', error);
});