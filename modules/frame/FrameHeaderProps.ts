import type { StoreSetter } from '../../common/global';
import type { LocaleKeys } from './LocaleKeys';

export interface MacroService {
  title: string;
  logo?: string;
  description?: string;
  link: string;
}
export interface HeaderMenuItem {
  key: string;
  text: string;
  icon?: string;
  onClick?: (key: string) => void;
}

export interface UseHeaderStoreReturn {
  title: string;
  setTitle: StoreSetter<string>;
  services: MacroService[];
  addServices: StoreSetter<MacroService>;
  resetServices: StoreSetter<MacroService>;
  menuItems: HeaderMenuItem[];
  addMenuItems: StoreSetter<HeaderMenuItem>;
  resetMenuItems: StoreSetter<HeaderMenuItem>;
  selectedMenuKey: string;
  toggleMenuKey: StoreSetter<string>;
  locale: LocaleKeys;
  setLocale: StoreSetter<LocaleKeys>;
}
