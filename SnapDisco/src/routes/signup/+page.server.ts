import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
/** @type {import('./%types').Actions} */

export const actions = {
	default: async ({ cookies, request }) => {
		//server form response to signup a user
		const data = await request.formData();
		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('hashedPassword');

		

		const prisma = new PrismaClient();
		if (username != '') {
			async function main() {
				const user = await prisma.user.create({
					data: {
						id: uuidv4(),
						name: username.toString(),
						email: email.toString(),
						password: password.toString()
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
		} else {
			async function main() {
				const user = await prisma.user.create({
					data: {
						id: uuidv4(),
						name: '',
						email: email.toString(),
						password: password.toString()
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
};
