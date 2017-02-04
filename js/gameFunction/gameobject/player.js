Player = function() {

    this._tick = function() {
        this.hspeed = this.handler._getKeyManager().rightKey - this.handler._getKeyManager().leftKey;
        this.vspeed = this.handler._getKeyManager().downKey - this.handler._getKeyManager().upKey;

        if (this.hspeed !== 0 && this.vspeed !== 0) {
            this.x += this.hspeed * this.speed / 1.414;
            this.y += this.vspeed * this.speed / 1.414;
        } else {
            this.x += this.hspeed * this.speed;
            this.y += this.vspeed * this.speed;
        }

    };

    this._render = function(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, 50, 50);
    };
};
