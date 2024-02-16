'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme='light'
      attribute='class'
    >
      {children}
    </ThemeProvider>
  );
}
