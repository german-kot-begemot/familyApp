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

//parent menu
export const parentMenu = [
  { label: 'Dashboard', path: '/parents' },
  { label: 'Tasks', path: '/parents/tasks' },
  { label: 'Store', path: '/parents/store' },
  { label: 'Kids', path: '/parents/kids' },
];
//kid menu
export const kidMenu = [
  { label: 'Dashboard', path: '/kids' },
  { label: 'Tasks', path: '/kids/tasks' },
  { label: 'Store', path: '/kids/store' },
  { label: 'Wallet', path: '/kids/wallet' },
];