
import type { ReactNode} from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  isOpen?: boolean,
  children?: ReactNode,
}

export function Portal({ children, isOpen }: PortalProps) {
  const ref = useRef<HTMLBodyElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('body');
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted && isOpen ? createPortal(children, ref.current!) : null;
}
