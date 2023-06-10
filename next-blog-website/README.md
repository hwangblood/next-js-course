- [Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
- [Metadata | Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [gray-matter - npm](https://www.npmjs.com/package/gray-matter)
- [remark - npm](https://www.npmjs.com/package/remark)
- [remark-html - npm](https://www.npmjs.com/package/remark-html)
- [notFound | Next.js](https://nextjs.org/docs/app/api-reference/functions/not-found)
- [generateStaticParams | Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Revalidating Data | Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- [Route Segment Config | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)

When using [Background Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#background-revalidation), we would have to wait that whole time, of course to have two requests go through after revalidating time, then get new data on our site, and  we may not  want that to happen and in that case we can use [On-demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#on-demand-revalidation)



**Trying out On-Demand Revalidation** (production mode) :

1. Add a new post
2. send on-demand revalidation request http://localhost:3000/api/revalidate?path=/&secret=secret-token
3. see revalidated data in http://localhost:3000



```shell
yarn run v1.22.19
$ next build
- info Loaded env from /home/work/become_web_developer/next-js-course/next-blog-website/.env.local
- info Creating an optimized production build  
- info Compiled successfully
- info Linting and checking validity of types  
- info Collecting page data  
- info Generating static pages (6/6)
- info Finalizing page optimization  

Route (app)                                Size     First Load JS
┌ ○ /                                      176 B          82.9 kB
├ ○ /favicon.ico                           0 B                0 B
└ ● /posts/[postId]                        412 B          83.2 kB
    ├ /posts/ssg-ssr
    └ /posts/pre-rendering
+ First Load JS shared by all              77.1 kB
  ├ chunks/2443530c-d4a6bd7fc7f21e3c.js    50.5 kB
  ├ chunks/488-b4b91b085767513b.js         24.7 kB
  ├ chunks/main-app-5cb77c5dc3cd52e4.js    215 B
  └ chunks/webpack-86d587ec39b3600b.js     1.64 kB

Route (pages)                              Size     First Load JS
┌ ○ /404                                   181 B          74.7 kB
└ λ /api/revalidate                        0 B            74.5 kB
+ First Load JS shared by all              74.5 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-50612fa76614eae9.js        27.6 kB
  ├ chunks/pages/_app-b555d5e1eab47959.js  195 B
  └ chunks/webpack-86d587ec39b3600b.js     1.64 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

Done in 11.74s.
```

