/**
 * Создает простой стор для управления состоянием приложения.
 */
import { createSubscription } from "./subscribe.js";
export function createStore(initialState) {
    let state = { ...initialState };
    const subscription = createSubscription();
    /**
     * Возвращает текущее состояние.
     */
    function getState() {
        return state;
    }
    /**
     * Обновляет состояние частично и уведомляет подписчиков.
     */
    function set(partial) {
        state = { ...state, ...partial };
        subscription.notify(state);
    }
    /**
     * Подписывается на изменения состояния.
     */
    function subscribe(listener) {
        return subscription.subscribe(listener);
    }
    /**
     * Извлекает значение из состояния с помощью селектора.
     */
    function select(selector) {
        return selector(state);
    }
    return {
        getState,
        set,
        subscribe,
        select,
    };
}
