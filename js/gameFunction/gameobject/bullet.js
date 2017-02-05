var Bullet = function (face, team) {
    this.face = face;
    this.team = team;

    this.vspeed = this.face<2?0:(this.face===DIRECTION.UP?-1:1);
    this.hspeed = this.face>1?0:(this.face===DIRECTION.LEFT?-1:1);

    this._init = function() {
        var posX = this.handler._getKeyManager().mouseX;
        var posY = this.handler._getKeyManager().mouseY;
        var playerX = this.handler._getPlayer().x;
        var playerY = this.handler._getPlayer().y;
        if (posX !== playerX || posY !== playerY) {
            var hDiff = posX - playerX;
            var vDiff = posY - playerY;
            var hypotenuse = Math.sqrt(hDiff*hDiff+vDiff*vDiff);
            this.vspeed = vDiff / hypotenuse;
            this.hspeed = hDiff / hypotenuse;
        }
    };

    this._tick = function() {

        var obstacles = this.handler._getObstacles();
        for (var i = 0; i < obstacles.length; ++i) {
            if (this.collide(obstacles[i])) {
                this.destroyed = true;
                return;
            }
        }

        var enemies = this.handler._getEnemies();
        for (var i = 0; i < enemies.length; ++i) {
            if (this.team === enemies[i].team) continue;
            if (this.collide(enemies[i])) {
                this.destroyed = true;
                enemies[i].destroyed = true;
                return;
            }
        }

        this.x += this.speed * this.hspeed;
        this.y += this.speed * this.vspeed;
    };

    this._render = function(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x+20, this.y+20, 10, 10);
    };
};