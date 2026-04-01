import type { ThemeMode } from './global';
import type { LocaleKeys } from './LocaleKeys';

export type EventKey = string;
export type EventHandler = Function;

export type EventMap = Record<EventKey, any[]>;

export type CfEventMap = {
  'locale:change': [key: LocaleKeys];
  'theme:change': [key: ThemeMode, coloring: string];
  'menu:change': [key: string, loc: 'header' | 'aside'];
};

export class EventEmitter<T extends EventMap = EventMap> {
  #events = new Map<keyof T, Set<EventHandler>>();

  on<K extends keyof T>(event: K, callback: (...args: T[K]) => void): void {
    if (!this.#events.has(event)) {
      this.#events.set(event, new Set());
    }

    this.#events.get(event)!.add(callback);
  }

  off<K extends keyof T>(event: K, callback?: (...args: T[K]) => void): void {
    const listeners = this.#events.get(event);

    if (!listeners) return;
    if (callback) {
      listeners.delete(callback);
    } else {
      listeners?.clear();
      this.#events.delete(event);
    }

    if (listeners.size <= 0) {
      this.#events.delete(event);
    }
  }

  emit<K extends keyof T>(event: K, ...args: T[K]): void {
    this.#events.get(event)?.forEach(callback => callback(...args));
  }

  once<K extends keyof T>(event: K, callback: (...args: T[K]) => void): void {
    const onceWrapper = (...args: T[K]) => {
      callback(...args);
      this.off(event, onceWrapper);
    };

    this.on(event, onceWrapper);
  }

  clear<K extends keyof T>(event?: K): void {
    if (event) {
      this.#events.get(event)?.clear();
      this.#events.delete(event);
    } else {
      this.#events.forEach(listeners => {
        listeners.clear();
      });
      this.#events.clear();
    }
  }
}
