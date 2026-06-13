export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
];

export type AppTheme = 'floral' | 'dark' | 'green' | 'cat' | 'panda' | 'light';

export interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}
