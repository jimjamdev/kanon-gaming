export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={className}>
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-xl">Sidebar</h2>
      </div>
    </aside>
  );
}
