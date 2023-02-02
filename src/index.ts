import * as dotenv from 'dotenv';

import express, { Application, Request, Response } from 'express';

import morgan from 'morgan';

const prisma = new PrismaClient();

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); //middleware logger

app.use('/s');

app.get('/', async (req: Request, res: Response) => {
  const ip = req.ip;
  //   debugger;
  res.status(200).send(`
<!DOCTYPE html>
<html>
   <head>
      <title>Node Server: Welcome</title>
   </head>
<body>
<style>  *{margin:0; padding:0; box-sizing:border-box; } </style>
<h1 style="text-align:center;>WELCOME TO THE GULAG</h1>
<p style="text-align:center;">Server Started at ${ip}:${PORT}</p>
   </body>
</html>`);
});

const PORT = Number(process.env.PORT || 300);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at ${PORT}`);
});
