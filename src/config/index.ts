const env = process.env;

export const config = {
  apiUrl: `${
    env.VERCEL_URL ||
    env.API_URL ||
    env.NEXT_PUBLIC_API_URL ||
    'http://localhost:3000'
  }/api/`,
};
