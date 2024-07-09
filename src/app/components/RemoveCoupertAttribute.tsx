'use client';

import { useEffect } from 'react';

export default function RemoveCoupertAttribute() {
  useEffect(() => {
    document.documentElement.removeAttribute('coupert-item');
  }, []);

  return null;
}