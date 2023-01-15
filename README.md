# Remix with Shopify Polaris

Build your [Remix](https://remix.run/) app with [Shopify Polaris](https://polaris.shopify.com/) using this template to handle the setup for you.

- [AppProvider](https://polaris.shopify.com/components/app-provider) setup in `root.tsx` to enable sharing global settings throughout the hierarchy of your application.
- `LinkLikeComponent` to ensure sure Polaris uses Remix's `<Link>` component.
- `<AppFrame>` component created for the pages where you like to include a standard application frame. Includes showing the navigation menu item using the Remix [useMatches](https://remix.run/docs/en/v1/hooks/use-matches).
- Edit or replace `app-logo.svg` and `app-logo-light.svg` with your logo to properly display in the [Frame](https://polaris.shopify.com/components/frame) component.
- Adjust the colors of Polaris using the CSS variables in `variables.css`.

---

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

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

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

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
