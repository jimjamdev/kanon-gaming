export function Banner({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="relative isolate overflow-hidden bg-gray-900 h-2/3">
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Some Banner
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
    </section>
  );
}
