## NextQL

_a minimal starter template for developing type-safe Next.js applications with GraphQL._

### Getting Started

`pnpm dlx create-next-app@latest -e https://github.com/andyols/nextql`

### Technologies Used

- [Next.js](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://react-query.tanstack.com/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [VSCode GraphQL](https://github.com/graphql/vscode-graphql)
- [tailwindcss](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)

### Configuring the API

Currently uses [GraphQL-Pokemon](https://github.com/favware/graphql-pokemon)

To change to another api, alter the endpoint in the following locations:

[`src/lib/client`](https://github.com/andyols/nextql/blob/7e4827464779a81deecd3e43cc6b5a87d99e25ea/src/lib/client.ts#L4)
[`.graphqlrc.yml`](https://github.com/andyols/nextql/blob/7e4827464779a81deecd3e43cc6b5a87d99e25ea/.graphqlrc.yml#L2)

Can also use an env variable but this requires extra configuration ([example](https://github.com/andyols/nextql/commit/1a2ab0bd91a0653d8fd868566a81ae492f5039f0#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)\)

### Vercel Deployment

This template is ready for production via [Vercel for GitHub](https://vercel.com/docs/concepts/git/vercel-for-github).

In order to use [`scripts/ignore-build-step.js`](https://github.com/andyols/nextql/blob/main/scripts/ignore-build-step.js) :

- Vercel Project Settings -> Git -> Ignored Build Step -> Command

  `node ./scripts/ignore-build-step.js`

  see [this article](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel) for more info on ignored build step functionality
