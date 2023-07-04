// front/components/modal/ModalPortal.tsx

import React, { ReactElement, useEffect, useState } from 'react';
import ReactDom, { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: ReactElement }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined') return null;

  return mounted ? createPortal(children, document.getElementById('modal-root') as HTMLElement) : null;
};

export default ModalPortal;
