/**
 * Любое Состояние - обьект
 */
export type State = Record<string, unknown>;
/**
 * Подписчик вызывается при изменении состояние
 */
export type Listener<S> = (state: S) => void;
/**
 * Функция Отписки
 */
export type Unsubscribe = () => void;
/**
 * Селектор - извлекает часть состояния
 */
export type Selector<S, R> = (state: S) => R;
/**
 * Интерфейс Хранилища
 */
export interface Store<S> {
    getState: () => S;
    set(partial: Partial<S>): void;
    subscribe(listener: Listener<S>): Unsubscribe;
    select<R>(selector: Selector<S, R>): R;
}
