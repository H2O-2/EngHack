function Player(x, y, handler) {

    this._x = x;
    this._y = y;
    this.speed = 5;

    this.handler = handler;

    this._tick = function() {
        var hdir = this.handler._getKeyManager().rightKey - this.handler._getKeyManager().leftKey;
        var vdir = this.handler._getKeyManager().downKey - this.handler._getKeyManager().upKey;

        if (hdir !== 0 && vdir !== 0) {
            this._x += hdir * this.speed / 1.414;
            this._y += vdir * this.speed / 1.414;
        } else {
            this._x += hdir * this.speed;
            this._y += vdir * this.speed;
        }

    };

    this._render = function(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this._x, this._y, 50, 50);
    }

}
