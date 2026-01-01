export function createSubscription() {
    const listeners = new Set();
    function subscribe(listener) {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    }
    function notify(state) {
        listeners.forEach((listener) => {
            listener(state);
        });
    }
    return {
        subscribe,
        notify,
    };
}
