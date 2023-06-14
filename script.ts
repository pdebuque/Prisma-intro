import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({data: {name: 'paolo'}});
  // console.log(user);

  await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect() // disconnects from the database when script is finished; not strictly necessary, but good practice
  })