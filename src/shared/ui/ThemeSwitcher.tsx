import { useState } from 'react';
import { Palette } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 max-h-fit rounded-lg p-2 transition-colors hover:bg-accent"
    >
      <Palette size={16} className="palette-btn" />
    </button>
  );
};
