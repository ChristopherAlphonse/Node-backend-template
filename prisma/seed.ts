import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const prismaDB = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
});

const idGen = Number(nanoid());

const seedData = async () => {
  if ((await prismaDB.post.count()) === 0) {
    prismaDB.post.createMany({
      data: [
        {
          id: idGen,
          authorId: idGen,
          slug: 'Node Stack',
          title: 'Full Stack backend with NodeJS',
          publishedAt: new Date(),
        },
        {
          id: idGen,
          authorId: idGen,
        },
      ],
    });
  }
};
