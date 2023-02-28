This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Kanon Gaming Demo
- [x] Next.js 12 - 13 still iffy
- [x] Redux Toolkit with redux wrapper
- [x] 100 Performance Score
- [x] Tailwind - this was a bad idea
- [x] Typescript / Eslint / Prettier
- [x] PWA - Install on your phone and use it like an app

![Lighthouse Score](/public/stats/lighthouse.png)

```bash
total time: roughtyly 24h split over a couple of weeks
```
## Notes
So, I was hoping to do a little more. But full time work and part-time consultancy didn't leave me enough hours. So I was split a few hours here, a few hours there,

- I wanted to see what the fuss is about with tailwind. I regretted that. It's quicker for me to write my own CSS or plan and build based on a design system in SASS, CSS-IN-JS
- There's some examples of components, but not enough. Normally if I'm using SASS and use clsx to switch styles based on props. There's a small example in ui/component/button
- Usually i'd have something like: ```<Button variant="primary" size="large" />```.
- Tailwind is going to involve doing this for everything, button, typography, grid, etc.
- I wanted to use the new Next.js Image component, but with 12 had to use the older one with the beautiful extra spans.
- Click the button on the banner to play the game
## Casino Epic Test
![Lighthouse Score](/public/stats/casinoepic.png)
You have some big issues on your casinos. This is just for casino epic, but it seems be prevalent across the board.
- Loading times are very slow - 12s to interactive :/
- Your SSR or SGG is not working or has been disabled. You need to be able to serve your pages to the user as fast as possible. This is a big issue.
- Next.js is good for when you really need performance, if you're using it, make use of the features the framework as to offer. You may as well be using create-react-app XD
- Seems to have bugs coming in and out of mobile view. Sidebar disappears and doesn't come back.
- Looks nice enough. Quite like the colors and clean sidebar.

##` Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
