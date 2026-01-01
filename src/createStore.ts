/**
 * Создает простой стор для управления состоянием приложения.
 */

import type { Store } from "./types.js";
import { createSubscription } from "./subscribe.js";

export function createStore<S extends Record<string, unknown>>(
  initialState: S
): Store<S> {
  let state = { ...initialState };

  const subscription = createSubscription<S>();

  /**
   * Возвращает текущее состояние.
   */
  function getState(): S {
    return state;
  }

  /**
   * Обновляет состояние частично и уведомляет подписчиков.
   */
  function set(partial: Partial<S>): void {
    state = { ...state, ...partial };
    subscription.notify(state);
  }

  /**
   * Подписывается на изменения состояния.
   */
  function subscribe(listener: (state: S) => void) {
    return subscription.subscribe(listener);
  }

  /** 
   * Извлекает значение из состояния с помощью селектора.
   */
  function select<R>(selector: (state: S) => R): R {
    return selector(state);
  }

  return {
    getState,
    set,
    subscribe,
    select,
  };
}
