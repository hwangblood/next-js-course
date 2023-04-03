- [Data Fetching: Fundamentals | Next.js](https://beta.nextjs.org/docs/data-fetching/fundamentals)

* [Data Fetching: Fetching | Next.js](https://beta.nextjs.org/docs/data-fetching/fetching)

  * > **Async Server Component TypeScript Error**
    >
    > - An `async` Server Components will cause a `'Promise<Element>' is not a valid JSX element` type error where it is used.
    > - This is a known issue with TypeScript and is being worked on upstream.
    > - As a temporary workaround, you can add `{/* @ts-expect-error Async Server Component */}` above the component to disable type checking for it.
