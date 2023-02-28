export function fetchApi(url: string, options: RequestInit = {}): Promise<any> {
  const headers = {
    'Content-Type': 'application/json',
  };
  return fetch(url, { ...options, headers })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw response;
    })
    .catch((error) => {
      throw error;
    });
}
