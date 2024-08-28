import express from 'express';
import { Route1 } from './routes/routes.js';
const app = express();
const PORT = 8080 || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', Route1); // endpoint
//app.use('/api/', Router2); // endpoint

app.listen(PORT , () => {
    console.log(`Server listening at PORT `);
});