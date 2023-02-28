import type { FormHTMLAttributes } from 'react';

export function GameListSearch(props: FormHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="mb-5 mt-5 block w-full rounded-md border-blue-300 pr-10 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      {...props}
      type="text"
    />
  );
}
