import { Button } from '@/ui/components/button/button';

export function Banner({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div
        className="relative isolate overflow-hidden bg-gray-900 h-96 bg-cover"
        style={{ backgroundImage: 'url("/images/banners/diablo.webp")' }}
      >
        <article className=" absolute z-10 p-7 md:p-14">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Some Banner
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <Button className="mt-3" rounded>
            Hello
          </Button>
        </article>
      </div>
    </section>
  );
}
