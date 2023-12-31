# Remix Jokes

Remix study project
<br />
- [Remix Docs](https://remix.run/docs)
- [To-do](#to-do)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over relevant code/assets from your current app to the new project that's pre-configured for your target server.

Most importantly, this means everything in the `app/` directory, but if you've further customized your current application outside of there it may also include:

- Any assets you've added/updated in `public/`
- Any updated versions of root files such as `.eslintrc.js`, etc.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

## TO-DO

Study roadmap

- [x] Outline
- [x] Prerequisites
- [x] Generate a new remix project
- [x] Explore the project structure
- [x] Routes
- [x] Parameterized routes
- [x] styling
- [x] Database
- [x] Setup prisma
- [x] Connect to the database
- [x] Read from the database
- [x] Read from the database in a Remix loader
- [x] Data overfetching
- [x] Network type safety
- [x] Wrap up database queries
- [ ] Mutations
- [ ] Authentications
- [ ] Preparing the database
- [ ] Auth flo overview
- [ ] Build the login form
- [ ] Build logout action
- [ ] User registration
- [ ] Unexpected errors
- [ ] Expected errors
- [ ] SEO with Meta tags
- [ ] Resource routes
- [ ] JavaScript...
- [ ] Forms
- [ ] Prefetching
- [ ] Optimistic UI
- [ ] Deployment
