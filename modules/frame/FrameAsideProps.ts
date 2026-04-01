import type { StoreSetter } from '../../common';

export interface AsideMenuItem {
  key: string;
  label: string;
  path?: string;
  onClick?: () => void;
  icon?: string;
  children?: AsideMenuItem[];
}

export interface UseAsideStoreReturn {
  menuItems: AsideMenuItem[];
  addMenuItems: StoreSetter<AsideMenuItem>;
  resetMenuItems: StoreSetter<AsideMenuItem>;
  selectedMenuKey: string;
  toggleMenuKey: StoreSetter<string>;
  visible: boolean;
  setVisible: StoreSetter<boolean>;
}
