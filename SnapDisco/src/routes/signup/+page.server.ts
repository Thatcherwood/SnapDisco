import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { hashPass } from './signup';
/** @type {import('./%types').Actions} */

export const actions = {
	default: async ({ cookies, request }) => {
		//server form response to signup a user
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const email = data.get('email')!.toString();
		const password = data.get('password')!.toString();

		hashPass(password)


		if (data.get('email') !== null && data.get('password') !== null)	{

		const prisma = new PrismaClient();
			async function main() {
				const user = await prisma.user.create({
					data: {
						id: uuidv4(),
						name: username, // the "!" works around the compiler claiming these values might be null. If they are, there will be RUNTIME ERROR. Make sure these are NOT NULL
						email: email,
						password: password
					}
				});
				console.log(user);
			}
			main()
				.then(async () => {
					await prisma.$disconnect();
				})
				.catch(async (e) => {
					console.error(e);
					await prisma.$disconnect();
					process.exit(1);
				});

		}
	}
	}


