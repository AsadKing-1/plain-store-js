import type { Listener, Unsubscribe } from "./types.js";
export declare function createSubscription<S>(): {
    subscribe: (listener: Listener<S>) => Unsubscribe;
    notify: (state: S) => void;
};
