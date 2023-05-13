# SnapDisco

This project allows the trimming of videos (Specifically from SnapChat) into a form uploadable on Discord.

This website will receive user-made videos, and process them into a smaller file size. To do so, it will take the unique approach of allowing users to choose certain “Key Frames” in their videos they want to keep. Any images besides the most important ones will be discarded from the video – drastically decreasing file size. Users will be able to change the length of how long a image is shown before the next, add subtitles, add annotations, and trim the video. The goal of these actions is to allow videos made in, say, Snap Chat, to be shared on Discord. The website will need to be mobile friendly since that is the target audience.


## Dependencies

[NPM](https://www.npmjs.com) -- Package manager for the web.  
[MLT-XML](https://www.npmjs.com/package/mlt-xml) -- Converts Javascript objects to XML formatted for MLT  
[MLT](https://www.mltframework.org) -- Media editing toolkit. Runs on the server to edit video files  
[Prisma](https://www.prisma.io) -- Object Relational Manager. Maps Javascript objects to server database  
[PostgreSQL](https://www.postgresql.org) -- Relational Database for holding user data (Such as XML data for MLT to process)  
[Cypress](https://www.cypress.io) -- Automated frontend testing  
[Sveltekit](https://kit.svelte.dev) -- Frontend development  
[jwt-simple](https://www.npmjs.com/package/jwt-simple) -- login/password duties  
[huge-uploader](https://www.npmjs.com/package/huge-uploader-nodejs?activeTab=readme) -- Allow uploading large files in chunks -- useful for flakey mobile connections may be added if time permits 


## Installation
Modification of the .env file will be required to hook up prisma to your own internal development database  
You will need to add the following environment variables: <DATABASE_URL>, <JWT_SIMPLE_TOKEN>


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```


## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
