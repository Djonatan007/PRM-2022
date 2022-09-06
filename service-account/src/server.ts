import express from 'express';
import cors from 'cors';
import routes from './router';
import dotenv  from 'dotenv';

//Carrega variáveis de ambiente
dotenv.config();

//Pega a porta da variável de ambiente
const PORT = process.env.PORT || 3302;

//Instancio a aplicação
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Importo as rotas 
app.use('/account', routes);

//Levanto a aplicação
app.listen(PORT, () => {
    console.log(`Service Account running in port ${PORT}`);
});