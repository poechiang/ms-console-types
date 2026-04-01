import type { AsideMenuItem } from '../../common';

export interface UseAsideStoreReturn {
  menuItems: AsideMenuItem[];
  selectedMenuKeys: string[];
  visible: boolean;
}
