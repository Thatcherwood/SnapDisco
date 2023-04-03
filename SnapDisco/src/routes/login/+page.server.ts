import { fail } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    let name = data.get("name")?.toString()
    let userEmail = data.get("userEmail")?.toString()

    if (!name || !userEmail) {
      return fail(400, { name, userEmail, missing: true });
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail))) {
      return fail(400, { name, incorrect: true });
    }

    await prisma.user.create({
      data: {
        name,
        email: userEmail,
      },
    });

    throw redirect(303, `/`)
  }
};