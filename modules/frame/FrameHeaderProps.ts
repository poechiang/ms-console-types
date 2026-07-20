import type { HeaderMenuItem, ThemeMode } from '../../common/global'
import type { LocaleKeys } from '../../common/LocaleKeys'

export interface MacroService {
  title: string
  logo?: string
  description?: string
  link: string
}

export interface UseHeaderStoreReturn {
  title: string
  services: MacroService[]
  menuItems: HeaderMenuItem[]
  selectedMenuKey: string
  locale: LocaleKeys
  theme: Omit<ThemeMode, 'auto'>
  coloring: string
}
