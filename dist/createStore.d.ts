/**
 * Создает простой стор для управления состоянием приложения.
 */
import type { Store } from "./types.js";
export declare function createStore<S extends Record<string, unknown>>(initialState: S): Store<S>;
