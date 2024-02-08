import * as dotenv from 'dotenv';

import express, { Application, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

dotenv.config();
const prismaDB = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });
const idGen = () => nanoid(16);

const seedDatabase = async () => {
  if ((await prismaDB.post.count()) === 0) {
    await prismaDB.post.createMany({
      data: [
        {
          id: idGen(),
          slug: 'Node Stack',
          title: 'Full Stack backend with NodeJS',
          publishedAt: new Date(),
        },
        {
          id: idGen(),
          slug: 'draft-post',
          title: 'Draft Post',
        },
      ],
    });
  }
};
seedDatabase();

const app: Application = express();
app.use(morgan('dev'));

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
<h1 style="text-align:center;>WELCOME</h1>
<p style="text-align:center;">Server Started at ${ip}:${PORT}</p>
   </body>
</html>`);
});

app.get('/post', async (req: Request, res: Response) => {
  const posts = await prismaDB.post.findMany();
  res.json(posts);
});

const PORT = Number(process.env.PORT || 300);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at ${PORT}`);
});
