var Bullet = function (face, team) {
    this.face = face;
    this.team = team;

    this.vspeed = this.face<2?0:(this.face===DIRECTION.UP?-1:1);
    this.hspeed = this.face>1?0:(this.face===DIRECTION.LEFT?-1:1);

    this.animation = new Animation(5, this.handler._getAsset().spr_Bullet);

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

        var angle = this.vspeed/this.hspeed;

        if (angle > 1 || angle < -1) {
            return this.vspeed>0?DIRECTION.DOWN:DIRECTION.UP;
        } else {
            return this.hspeed>0?DIRECTION.RIGHT:DIRECTION.LEFT;
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

        this.animation._tick();

        if (this.x < -100 || this.x > WIDTH+100 || this.y < -100 || this.y > HEIGHT+100) this.destroyed = true;
    };

    this._render = function(ctx) {

        this.animation._getFrame().draw(ctx, this.x, this.y);

        //ctx.fillStyle = '#ffffff';
        //ctx.fillRect(this.x+this.bound.x, this.y+this.bound.y, this.bound.width, this.bound.height);
    };
};