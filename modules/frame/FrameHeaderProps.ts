export interface MacroService {
  title: string;
  logo?: string;
  description?: string;
  link: string;
}
export interface FrameHeaderItem {
  key: string;
  text: string;
  icon?: string;
}
export interface FrameHeaderInjection {
  title?: string;
  services?: MacroService[];
  items?: FrameHeaderItem[];
}
