var Bullet = function (face, team) {
    this.face = face;
    this.vspeed = this.face<2?0:(this.face===DIRECTION.UP?-1:1);
    this.hspeed = this.face>1?0:(this.face===DIRECTION.LEFT?-1:1);

    this.team = team;

    this._tick = function() {
        this.x += this.speed * this.hspeed;
        this.y += this.speed * this.vspeed;
    };

    this._render = function(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, 10, 10);
    };
};