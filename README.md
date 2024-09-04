# Structured Object Generation Array Mode

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnicoalbanese%2Fstructured-object-generation-array-mode&env=OPENAI_API_KEY)

This is a Next.js project that uses the the [`streamObject`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/stream-object) function from the Vercel AI SDK to stream structured objects. This project showcases the new [output mode](https://sdk.vercel.ai/docs/ai-sdk-core/generating-structured-data#output-strategy-array) which allows you to stream structured objects by complete object rather than by token. This solves layout shift issues common to AI applications using structured object generation.

## Getting Started

First, clone the repository:
```bash
git clone https://github.com/nicoalbanese/structured-object-generation-array-mode.git
```

Then, install the dependencies:
```bash 
pnpm install
```

Copy the .env.exampmle file to .env.local and fill in the required environment variables:
```bash
OPENAI_API_KEY=sk-...
```

Finally, run the development server:
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vercel AI SDK](https://sdk.vercel.ai/docs/) - learn about the Vercel AI SDK.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
