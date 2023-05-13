import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword, } from './signup';
import { error } from 'console';
import { JWT_SIMPLE_TOKEN } from '$env/static/private'
import { Session } from 'inspector';
/** @type {import('./%types').Actions} */

export const actions = {
	default: async ({ cookies, request }) => {
		//server form response to signup a user
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const email: string = data.get('email')!.toString();
		const password: string = data.get('password')!.toString();

		let hashedUserPassword: string | undefined = hashPassword(password);

		if (typeof hashedUserPassword !== 'undefined') { //check that forms are not null
			if (data.get('email')) {
				const prisma = new PrismaClient();
				async function main() {
					const user = await prisma.user.create({
						data: {
							id: uuidv4(),
							name: username,
							email: email,
							password: hashedUserPassword!
						}
					});
					console.log(user);
					let jwt = require('jwt-simple')
					let payload = email
					let secret = JWT_SIMPLE_TOKEN
					let token = jwt.encode(payload, secret)
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
		else {error("null signup form")}//TODO inform user of error
	}
};
