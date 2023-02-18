export function winsInReel({ reel = [] }: { reel?: string[] }) {
  if (reel.length && !Array.isArray(reel)) {
    return;
  }

  if (reel[0] === reel[1] && reel[1] === reel[2]) {
    return { count: 3, symbol: reel[0] };
  } else if (reel[0] === reel[1] || reel[1] === reel[2]) {
    return { count: 2, symbol: reel[1] };
  }
  return { count: 0, symbol: '' };
}
