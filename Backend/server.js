import express from 'express';
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
import productRouter from './routes/product.route.js'

dotenv.config();
const app = express();
const PORT = process.env.Port || 3000

app.use(express.json()) // allow us to accept JSON data iin the req.body

app.use('/api/products', productRouter)

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:'+PORT);
})

