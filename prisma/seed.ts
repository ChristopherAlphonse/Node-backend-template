import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
const prismaDB = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
});
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
