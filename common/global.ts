export type Loose<U = any, T = unknown> = U & Record<string, T>;
export type ThemeMode = 'light' | 'dark' | 'auto';
export type StoreSetter<T> = (...value: T[]) => void;
