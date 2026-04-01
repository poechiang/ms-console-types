import type { FrameAsideInjection } from './modules/frame/FrameAsideProps';
import type { FrameHeaderInjection } from './modules/frame/FrameHeaderProps';

export * from './modules/frame';

export interface CfExpose<T> {
  unmount: () => void;
  props: T;
}
export interface CfExposes {
  header: CfExpose<FrameHeaderInjection>;
  aside: CfExpose<FrameAsideInjection>;
}
