var Enemy = function () {

    this.face = 2;
    this.team = TEAM.TWO;

    this._tick = function() {
        var playerX = this.handler._getPlayer().x,
            playerY = this.handler._getPlayer().y;
        this.hspeed = this.x - playerX >= 5?-1:(this.x - playerX <= -5?1:0);
        this.vspeed = this.y - playerY >= 5?-1:(this.y - playerY <= -5?1:0);

        if (this.hspeed !== 0 && this.vspeed !== 0) {
            this.hspeed /= 1.414;
            this.vspeed /= 1.414;
        }

        var obstacles = this.handler._getObstacles();

        if (!this.collideArray(obstacles)) {
            this.x += this.hspeed * this.speed;
            this.y += this.vspeed * this.speed;
        }

    };

    this._render = function(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 30, 30);
    };

};