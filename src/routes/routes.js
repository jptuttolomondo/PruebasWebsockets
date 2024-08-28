import {Router} from 'express' 
export const Route1 = Router();
Route1.get('/', async (req, res) => {
// const { body } = req.body;
res.setHeader('Content-Type', 'application/json');
return res.status(200).json({ payload: 'ok' });
  });