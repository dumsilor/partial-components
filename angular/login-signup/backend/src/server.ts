import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { authRouters } from './routes/auth';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/login').then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

app.use('/api/auth', authRouters);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
