## NextQL

_a minimal starter template for developing type-safe Next.js applications with GraphQL._

### Technologies Used

🏗️ Framework

- [Next.js](https://nextjs.org/)

💾 Data Management

- [GraphQL](https://graphql.org/)
- [React Query](https://react-query.tanstack.com/)

⚡ Dev Enhancement

- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [VSCode GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)

🎨 Styling

- [tailwindcss](https://tailwindcss.com/)

📦 Package Managment

- [pnpm](https://pnpm.io/)

### Getting Started

`pnpm dlx create-next-app@latest -e https://github.com/andyols/nextql`

### Configuring the API

Currently uses [GraphQL-Pokemon](https://github.com/favware/graphql-pokemon)

To change to another api, alter the endpoint in the following locations:

- [`src/lib/client.ts`](https://github.com/andyols/nextql/blob/7e4827464779a81deecd3e43cc6b5a87d99e25ea/src/lib/client.ts#L4)
- [`/.graphqlrc.yml`](https://github.com/andyols/nextql/blob/7e4827464779a81deecd3e43cc6b5a87d99e25ea/.graphqlrc.yml#L2)

Can also use an env variable but this requires extra configuration ([example](https://github.com/andyols/nextql/commit/1a2ab0bd91a0653d8fd868566a81ae492f5039f0)\)

### Vercel Deployment

This template is ready for production via [Vercel for GitHub](https://vercel.com/docs/concepts/git/vercel-for-github).

In order to use [`scripts/ignore-build-step.js`](https://github.com/andyols/nextql/blob/main/scripts/ignore-build-step.js) :

- Vercel Project Settings -> Git -> Ignored Build Step -> Command

  `node ./scripts/ignore-build-step.js`

  see [this article](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel) for more info on ignored build step functionality
