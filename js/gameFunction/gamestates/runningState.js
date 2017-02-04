function RunningState(handler) {

    this.handler = handler;

    this._tick = function () {
        this.handler._getPlayer()._tick();
        var bullets = this.handler._getBullets();
        for (var i = 0; i < bullets.length; ++i) {
            bullets[i]._tick();
        }
    }

    this._render = function (ctx) {
        this.handler._getPlayer()._render(ctx);
        var bullets = this.handler._getBullets();
        for (var i = 0; i < bullets.length; ++i) {
            bullets[i]._render(ctx);
        }
    }

}