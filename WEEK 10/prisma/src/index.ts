import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(email: string, password: string, firstName: string, lastName: string) {

    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res)
}