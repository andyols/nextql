This is a [next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This serves as a minimalistic template for developing Next.js applications with GraphQL.

## Technologies Used

These are the technologies/packages that are currently used within this template:

- [next.js](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://react-query.tanstack.com/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [tailwindcss](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)

## Deploy on Vercel

This template is a couple steps away from production via [Vercel](https://vercel.com/docs/concepts/git/vercel-for-github).

After linking the repo with Vercel git integration, use the following settings:

- Settings -> General -> Build & Development Settings -> Build Command

  `pnpm deploy`

- Settings -> General -> Build & Development Settings -> Install Command

  `pnpm i`

If you want to use the included ignore build step script:

- Settings -> Git -> Ignored Build Step -> Command

  `node ./scripts/ignore-build-step.js`

  _see [this article](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel) for more info_
