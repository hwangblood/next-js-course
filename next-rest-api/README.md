- [Environment Variables | Next.js](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Route Handlers | Next.js](https://nextjs.org/docs/app/building-your-application/routing/router-handlers)
- [Routing: Middleware | Next.js](https://nextjs.org/docs/pages/building-your-application/routing/middleware)
- [Matching Paths | Next.js](https://nextjs.org/docs/pages/building-your-application/routing/middleware#matching-paths)
- [Caveates | Next.js](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#caveats)
- [limiter - npm](https://www.npmjs.com/package/limiter)
- [Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [cors - npm](https://www.npmjs.com/package/cors)

```shell
yarn run v1.22.19
$ next build
- info Loaded env from /home/work/become_web_developer/next-js-course/next-rest-api/.env.local
- info Creating an optimized production build  
- info Compiled successfully
- info Linting and checking validity of types  
- info Collecting page data  
- info Generating static pages (6/6)
- info Finalizing page optimization  

Route (app)                                Size     First Load JS
┌ ○ /                                      4.78 kB        81.9 kB
├ λ /api/hello                             0 B                0 B
├ λ /api/todos                             0 B                0 B
├ λ /api/todos/[id]                        0 B                0 B
└ ○ /favicon.ico                           0 B                0 B
+ First Load JS shared by all              77.1 kB
  ├ chunks/2443530c-d4a6bd7fc7f21e3c.js    50.5 kB
  ├ chunks/488-b4b91b085767513b.js         24.7 kB
  ├ chunks/main-app-d908a777a2dfa50d.js    215 B
  └ chunks/webpack-13cb6a530b2d87f9.js     1.64 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   181 B          74.8 kB
+ First Load JS shared by all              74.6 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-f6b2ef99c4b9c22b.js        27.7 kB
  ├ chunks/pages/_app-b555d5e1eab47959.js  195 B
  └ chunks/webpack-13cb6a530b2d87f9.js     1.64 kB

ƒ Middleware                               18.5 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

Done in 39.52s.
```

