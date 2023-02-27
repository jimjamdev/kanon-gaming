export function GameThumbNailTitle({ title }: { title?: string }) {
  return (
    <div className="flex flex-nowrap bg-orange-500 p-2 absolute overflow-hidden text-sm bottom-0 z-10 w-full text-center">
      {title}
    </div>
  );
}
