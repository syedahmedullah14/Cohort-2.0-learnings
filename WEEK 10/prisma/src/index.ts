import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(email: string, password: string, firstName: string, lastName: string) {

    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            id: true,
            password: true
        }
    })
    console.log(res)
}
insertUser("syedahmedullahjaser@gmail.com", "password", "Jaser", "Syed")

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
})