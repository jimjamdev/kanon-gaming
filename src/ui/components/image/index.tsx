import NextImage from 'next/image';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

export function Image({
  className,
  src,
  width,
  height,
  priority,
  alt,
}: {
  className?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
}) {
  const classNames = clsx('img', {}, className);

  return (
    <div className={classNames}>
      <NextImage
        alt={alt}
        className={className}
        height={height}
        priority={priority}
        src={src}
        width={width}
      />
    </div>
  );
}
