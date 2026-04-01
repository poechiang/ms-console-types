import type { UseAsideStoreReturn } from './modules/frame/FrameAsideProps';
import type { UseHeaderStoreReturn } from './modules/frame/FrameHeaderProps';

export * from './common';
export * from './modules/frame';
export interface CfExpose<T> {
  unmount: () => void;
  store: T;
}
export interface CfExposes {
  header: CfExpose<UseHeaderStoreReturn>;
  aside: CfExpose<UseAsideStoreReturn>;
}
