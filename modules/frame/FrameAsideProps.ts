export interface MenuItem {
  key: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
  onClick?: () => void;
}

export interface FrameAsideInjection {
  visible?: boolean;
  items: MenuItem[];
}
