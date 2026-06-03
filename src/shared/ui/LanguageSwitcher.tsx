import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { languages } from '../types/appTypes';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-3 py-1 border rounded-md text-sm">
        {i18n.language.toUpperCase()}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="p-0">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLang(lang.code)}
            className=" transition-colors duration-300 ease-in-out hover:bg-[#44CCAA]/10"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
