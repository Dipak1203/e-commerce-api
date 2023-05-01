import express from 'express';
import {SERVER_PORT} from './config';
import router from './routes';
const app = express();

app.use('/api',router);

app.listen(SERVER_PORT,() =>{
    console.log(`server is running on port ${SERVER_PORT}`)
})