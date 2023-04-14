import { PrismaClient } from '@prisma/client'
import {v4 as uuidv4 } from 'uuid'
import newUsername from './+page.svelte'
import newUserEmail from './+page.svelte'
import password from './+page.svelte'

const prisma = new PrismaClient()

const addUsername = newUsername.toString();
const addUserEmail = newUserEmail.toString();
const addUserPassword = password.toString();

async function main() {
  const user = await prisma.user.create({
    data: {
      id: uuidv4(),
      name: addUsername,
      email: addUserEmail,
      password: addUserPassword
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
  
