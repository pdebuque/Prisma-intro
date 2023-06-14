import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({data: {name: 'paolo'}});
  console.log(user);

  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect() // disconnects from the database when script is finished; not strictly necessary, but good practice
  })