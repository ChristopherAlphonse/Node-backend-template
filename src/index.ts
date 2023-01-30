import * as dotenv from 'dotenv';

import { PrismaClient } from '@prisma/client';
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  res.status(200).send('Test');
});

const PORT = parseInt(process.env.PORT as string, 10) || 8081;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at ${PORT}`);
});
