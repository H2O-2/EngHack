function RunningState(handler) {

    this.handler = handler;

    this._tick = function () {
        this.handler._getPlayer()._tick();
    }

    this._render = function (ctx) {
        this.handler._getPlayer()._render(ctx);
    }

}