# example-bridgetown-preact

[Bridgetown](https://www.bridgetownrb.com) site example showcasing [Preact](https://preactjs.com) and [React Hook Form](https://react-hook-form.com/). Preact is a slim, lightweight alternative to React that's drop-in compatible with most libraries in the React ecosystem. React Hook Form is a really nice form library that provides a ton of useful features with a very simple API.

**[DEMO SITE](https://example-bridgetown-preact.vercel.app)**

## Requirements:

* Ruby version 2.5 or above (ruby version can be checked by running ruby -v)
* Node version 10.13 or above (which you can check by running node -v)
* Yarn (which you can check by running yarn -v)

## Setup

* Run `bundle install`
* Run `yarn install`
* Run `yarn start` and visit http://localhost:4000

## What This Example Does

In [`Form.jsx`](https://github.com/jaredcwhite/example-bridgetown-preact/blob/master/frontend/javascript/Form.jsx), there is a custom element defined (`my-preact-form`) which calls Preact's `render` function to render a `Form` component into the element node. All you have to do is add that element to an HTML page and that will mount the component, e.g., `<my-preact-form></my-preact-form>`

The `Form` component in turn sets up React Hook Form with all the usual stuff that library can do like provide validation, watch values for changes, serialize form values into JSON and perform custom logic upon submission, etc.

Why this is interesting is you don't have to build your entire frontend in React or Preact in order to make use of helpful libraries/components in the ecosystem. It's very easy to create custom elements as mount points in the DOM for loading individual React/Preact components. You can use Swup (like this example site does), Turbolinks, or something similar to take care of fancy page transitions on your site, add frontend components where you need them, and the apparent behavior will be virtually indistinguishable from a site built solely with client-side tech (aka Gatsby, Next.js, etc.)—yet conceptually it will be an order of magnitude easier to reason about.

**One caveat to take note of:** this technique using Bridgetown doesn't provide you with the ability to statically render the React/Preact components server-side and "hydrate" them on the client-side later, so make sure the components you add are purely for dynamic bits of frontend UI and not necessary for essential content rendering (aka the stuff you need for SEO, RSS feeds, etc.)

## Get Started on Your Own Site

After [creating a new Bridgetown site repo](https://www.bridgetownrb.com/docs/), you can run an automation to install Preact and React Hook Form on your site and start building complex, interactive forms right away. Simply run this in your terminal:

```
bundle exec bridgetown apply https://github.com/jaredcwhite/example-bridgetown-preact
```
