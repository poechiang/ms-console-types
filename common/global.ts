export type Loose<U = any, T = unknown> = U & Record<string, T>;
export type ThemeMode = 'light' | 'dark' | 'auto';
export type StoreSetter<T> = (...value: T[]) => void;

export interface HeaderMenuItem {
  key: string;
  label: string;
  icon?: string;
  path?: string;
  onClick?: (item: HeaderMenuItem) => void;
}
export interface AsideMenuItem extends HeaderMenuItem {
  children?: AsideMenuItem[];
}
