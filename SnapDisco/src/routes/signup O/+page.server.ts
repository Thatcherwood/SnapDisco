import { PrismaClient } from '@prisma/client'
import express from 'express'
import {v4 as uuidv4 } from 'uuid'
import {newUserEmail} from './signupComponent'
import {newUserPassword} from './signupComponent'

const prisma = new PrismaClient()

let app = express()

async function main() {
  const user = await prisma.user.create({
    data: {
      id: newUserID,
      name: newUserName,
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
//The below is another method using express api to create a new user. dunno if this is correct
  let newUserID = uuidv4();
  let newUserName = '' //TODO get user input on their custom username

  app.post('/signup', async (req, res) => {
    const {signupusername} = req.body
    const result = () => prisma.user.create({
      data: {
        id: newUserID,
        name: newUserName,
        email: newUserEmail, // TODO get user input on their email
        password: newUserPassword //TODO get user input on password

      },
      res.json(result)



    })


  }
  