This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Do We Have SSR or SSG components?

run command `yarn run build` in terminal, and you can see like bellow:

```shell
yarn run v1.22.19
$ next build
warn  - You have enabled experimental feature (appDir) in next.config.js.
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
info  - Thank you for testing `appDir` please leave your feedback at https://nextjs.link/app-feedback

info  - Compiled successfully
info  - Linting and checking validity of types
info  - Collecting page data
[    ] info  - Generating static pages (0/5)Rendering UsersPage component
Rendering UsersPage component
info  - Generating static pages (5/5)
info  - Finalizing page optimization

Route (app)                                Size     First Load JS
┌ ○ /                                      175 B          74.3 kB
├ ○ /api/hello                             0 B                0 B
├ ○ /users                                 175 B          74.3 kB
└ λ /users/[userId]                        133 B          68.8 kB
+ First Load JS shared by all              68.7 kB
  ├ chunks/455-e3a12aac2a978f1a.js         66.4 kB
  ├ chunks/main-app-fb7cbaba4d78799f.js    202 B
  └ chunks/webpack-af2524eb4131fcd0.js     2.06 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   179 B          84.5 kB
+ First Load JS shared by all              84.3 kB
  ├ chunks/main-75bcdfa6e86c091d.js        82.1 kB
  ├ chunks/pages/_app-907dedfd0e4177db.js  192 B
  └ chunks/webpack-af2524eb4131fcd0.js     2.06 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

Done in 11.02s.
```

## How does the build respond?

run command `yarn run start` in terminal, and you can see like bellow:

```shell
yarn run v1.22.19
$ next start
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
warn  - You have enabled experimental feature (appDir) in next.config.js.
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
info  - Thank you for testing `appDir` please leave your feedback at https://nextjs.link/app-feedback
```

After starting server, open [http://localhost:3000](http://localhost:3000) with your browser and open the dev tool's **Network** tab.

You can navigate between different pages, and you will see that we already have the response for static page before navigating to it.

For examples:

- when at `/` page, the response for `/users` page is already requested before navigating.
- when at `/users` page, the response for `/user/[userId]` is **not** already requested before navigating. because `[userId]` param is not static, this is a SSR component, the request for fetching data will work after you navigate to the page
