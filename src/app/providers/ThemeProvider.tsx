import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="light-new"
      themes={['light-new', 'dark', 'green', 'cat', 'panda', 'light']}
    >
      {children}
    </NextThemesProvider>
  );
};
