import { PrismaClient } from '@prisma/client'
import {v4 as uuidv4 } from 'uuid'
import newUsername from './+page.svelte'

const prisma = new PrismaClient()


async function main() {
  const user = await prisma.user.create({
    data: {
      id: uuidv4(),
      name: '',//newUsername,
      email: '',
      password: ''
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  
