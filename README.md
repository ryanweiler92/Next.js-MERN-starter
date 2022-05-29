# MERN Starter 

## MongoDB GraphQL Node Express Next.js React Tailwind daisyUI
* This starter does not completely utilize Next.js ability to server side render. Meaning, the backend is still seperate and running through Express.

## GraphQL
* Use this link for the GraphQL sandbox. [GraphQL](https://studio.apollographql.com/sandbox/explorer?_gl=1%2A7lherj%2A_ga%2AMjU4MDc0ODE1LjE2NTM1ODQ5MDE.%2A_ga_0BGG5V2W2K%2AMTY1Mzc4MjI3MC4yLjEuMTY1Mzc4MjI4NC4w)

## Launching
* Use npm run develop

## Next.js

1. pages/index.js is === of a Home.js componenet in CRA
2. Each component in /pages is its own route 
3. Create nested routes by creating a foldering within /pages and creating a dynamic component to act as page. (ie. /weather && [city].js to create /weather/berlin)
4. Use <Link> component for relative path **starting at /pages** (ie. <Link     href="/weather">Weather</Link>) (import Link form "next//link")
5. prefetch=true for highly visited links prefetch=false otherwise (in <Link>)
6. use /public for static assets (ie. images/videos)
7. _app.js file is the default App component that Next.js uses to initalize pages. It serves as the starting point for all of your page's components. (_app.js === App.js?)
