export interface MacroService {
  title: string;
  logo?: string;
  description?: string;
  link: string;
}

export interface FrameHeaderInjection {
  title?: string;
  services: MacroService[];
}
