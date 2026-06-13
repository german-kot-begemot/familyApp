export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
];

export type AppTheme =
  | 'light-new'
  | 'dark'
  | 'green'
  | 'rabit'
  | 'pandas'
  | 'light';

export interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}
