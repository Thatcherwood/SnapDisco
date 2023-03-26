# SnapDisco
This project is for my Web Development class. It allows the trimming of videos (Specifically from SnapChat) into a form uploadable on Discord.

This website will receive user-made videos, and process them into a smaller file size. To do so, it will take the unique approach of allowing users to choose certain “Key Frames” in their videos they want to keep. Any images besides the most important ones will be discarded from the video – drastically decreasing file size. Users will be able to change the length of how long a image is shown before the next, add subtitles, add annotations, and trim the video. The goal of these actions is to allow videos made in, say, Snap Chat, to be shared on Discord. The website will need to be mobile friendly since that is the target audience. If there is extra time, extra features will be added.

Back-End: Media editing will rely on the ffmpeg library. Ffmpeg is a CLI application, so some scripting will need to be done in bash. Most logic will be done in python.

Front-End: The front end will be built using Svelte.

Automated Testing: Automated testing will be done with cypress. A collection of premade videos will be needed for testing. Pytest will be considered for the backend.





# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

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
