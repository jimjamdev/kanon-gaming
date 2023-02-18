export const config = {
  apiUrl: `${
    process.env.VERCEL_URL ||
    process.env.API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    'http://localhost:3000'
  }/api/`,
};
