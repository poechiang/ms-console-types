export interface MenuItem {
  key: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
}

export interface FrameAsideInjection {
  visible?: boolean;
  items: MenuItem[];
}
