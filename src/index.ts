import * as dotenv from 'dotenv';

import { PrismaClient } from '@prisma/client';
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });
const genId = () => nanoid(16);

const seedDatabase = async () => {
  if ((await db.post.count()) === 0) {
    await db.post.createMany({
      data: [
        {
          id: genId(),
          slug: 'node',
          title: 'Node',
          publishedAt: new Date(),
        },
        {
          id: genId(),
          slug: 'draft-post',
          title: 'Draft Post',
        },
      ],
    });
  }
};
seedDatabase();

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const posts = await db.post.findMany();
  res.json(posts);
});

const PORT = parseInt(process.env.PORT as string, 10) || 8081;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
