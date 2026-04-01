import type { FrameAsideInjection } from './modules/frame/FrameAsideProps';
import type { FrameHeaderInjection } from './modules/frame/FrameHeaderProps';

export * from './common';
export * from './modules/frame';

declare const RefSymbol: unique symbol;
export interface Ref<T = any, S = T> {
  get value(): T;
  set value(_: S);
  /**
   * Type differentiator only.
   * We need this to be in public d.ts but don't want it to show up in IDE
   * autocomplete, so we use a private Symbol instead.
   */
  [RefSymbol]: true;
}
export interface CfExpose<T> {
  unmount: () => void;
  props: T;
}
export interface CfExposes {
  header: CfExpose<FrameHeaderInjection>;
  aside: CfExpose<FrameAsideInjection>;
  useNavigator: (def?: string) => [Ref<string[]>, (key: string) => void];
}
