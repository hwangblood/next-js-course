- [Data Fetching: Server Actions | Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)

- [Routing: Linking and Navigating | Next.js](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating) > [Soft Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#soft-navigation) ~ [Hard Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#hard-navigation)

# Starter Code

**Identifying a BIG Problem:**

when add a new Todo in /add route or edit a Todo in /edit route, then navigate to home page, the updated Todo data is not available in / route's TodoList

To solve the problem, setting `prefetch` to `false`

**Another Problem:**

when edit a Todo in /edit route, then navigate to home page, it updated Todo data is available in / route's TodoList.

however, if we update the same Todo in / route's TodoList, then navigate to the Todo's /edit route, we can see the updated data is not sync working

we already known setting `prefetch` to `false` can solve the problem, but do you really want to set all `prefetch`'s of every Link in our application?

may not, we want to set `prefetch` to `false` everywhere in our application

**Still Have a Problem:**

Is prefetch the right solution?

all todos data is working well when we using Navbar to navigating between different routes, but If we using back/forward action of web browser, data is still not working well synchronously

A Better Solution is almost here

https://github.com/vercel/next.js/issues/42991

just downgrade to next@13.3.1, then we don't need `prefetch` anymore

# Getting Started

run json-server:

```shell
json-server --watch data/db.json --port 3500 -H 127.0.0.1
```

build result:

```shell
yarn run v1.22.19
warning ../package.json: No license field
$ next build
- info Creating an optimized production build
- info Compiled successfully
- info Linting and checking validity of types
- info Collecting page data
- info Generating static pages (5/5)
- info Finalizing page optimization

Route (app)                                Size     First Load JS
┌ λ /                                      2.2 kB         85.3 kB
├ ○ /add                                   1.28 kB        78.4 kB
├ ○ /api/hello                             0 B                0 B
├ λ /edit/[id]                             2.07 kB        85.2 kB
└ ○ /favicon.ico                           0 B                0 B
+ First Load JS shared by all              77.2 kB
  ├ chunks/2443530c-bcfc657fdf71f95d.js    50.5 kB
  ├ chunks/488-69d297d6626f0b34.js         24.7 kB
  ├ chunks/main-app-6dbee8e3e8807253.js    215 B
  └ chunks/webpack-e88a54f146baf41e.js     1.67 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   181 B          74.7 kB
+ First Load JS shared by all              74.6 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-d3fb668db7390dff.js        27.6 kB
  ├ chunks/pages/_app-b555d5e1eab47959.js  195 B
  └ chunks/webpack-e88a54f146baf41e.js     1.67 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

Done in 43.09s.
```
