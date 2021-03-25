# Personal Sveltekit Starter

Personal project Starter

## Set Up

Complete the following steps to begin a new project

```bash
# 1. First, clone to your machine
git clone https://github.com/zempo/sveltekit_starter.git my_project

# 2. Go to the project directory
cd my_project

# 3. Reset project .git history with this command
rm -rf .git && git init

# 4. Install project dependencies
npm i

# 5. Rename the example .env file, if you plan on using environmental variables in your project
mv example.env .env
```

> Be sure to update your package.json w/ your project details!

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Svelte apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `node build`. To use a different adapter, add it to the `devDependencies` in `package.json` making sure to specify the version as `next` and update your `svelte.config.cjs` to [specify your chosen adapter](https://kit.svelte.dev/docs#configuration-adapter). The following official adapters are available:

- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- [@sveltejs/adapter-vercel](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)
- ...more soon

[See the adapter documentation for more detail](https://kit.svelte.dev/docs#adapters)
