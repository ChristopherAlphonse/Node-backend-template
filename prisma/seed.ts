import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Chris',
    post: {
      create: { title: 'Hello World' },
      profile: {
        create: { bio: 'I love Prisma' },
      },
    },
  },
  {
    name: 'Summer',
    post: {
      create: { title: 'Hello Prisma' },
      profile: {
        create: { bio: 'I love TypeScript' },
      },
    },
  },
];

const main = async () => {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
