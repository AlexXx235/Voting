module.exports = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);

    },

    once(eventName, handler) {
        if (!this._oneTimeEventHandlers) this._oneTimeEventHandlers = {};
        if (!this._oneTimeEventHandlers[eventName]) {
            this._oneTimeEventHandlers[eventName] = [];
        }
        this._oneTimeEventHandlers[eventName].push(handler);
    },

    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }

        handlers = this._oneTimeEventHandlers && this._oneTimeEventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args) {
        if (this._eventHandlers[eventName]) {
            this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
        }

        if (this._oneTimeEventHandlers[eventName]) {
            this._oneTimeEventHandlers[eventName].forEach(handler => {
                handler.apply(this, args);
                this.off(eventName, handler);
            });
        }
    }
}