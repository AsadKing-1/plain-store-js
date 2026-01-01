import type { Listener, Unsubscribe } from "./types.js";

export function createSubscription<S>(){
    
    const listeners = new Set<Listener<S>>();

    function subscribe(listener: Listener<S>): Unsubscribe{
        listeners.add(listener);

        return () => {
            listeners.delete(listener);
        };
    }
    function notify(state: S): void {
        listeners.forEach((listener) => {
            listener(state)
        })
    }

    return  {
        subscribe,
        notify,
    };

}