var Enemy = function () {

    this.face = 2;
    this.team = TEAM.TWO;

    this.currentAnimation = null;

    this.walk_animation = [
        new Animation(7, this.handler._getAsset().spr_enemy_walk[0]),
        new Animation(7, this.handler._getAsset().spr_enemy_walk[1]),
        new Animation(7, this.handler._getAsset().spr_enemy_walk[2]),
        new Animation(7, this.handler._getAsset().spr_enemy_walk[3])
    ];

    this._tick = function() {
        var playerX = this.handler._getPlayer().x,
            playerY = this.handler._getPlayer().y;
        this.hspeed = this.x - playerX >= 5?-1:(this.x - playerX <= -5?1:0);
        this.vspeed = this.y - playerY >= 5?-1:(this.y - playerY <= -5?1:0);

        if (this.hspeed !== 0) {
            this.face = this.hspeed / 2 + 0.5;
            this.currentAnimation = this.walk_animation[this.face];
        } else if (this.vspeed !== 0) {
            this.face = this.vspeed / 2 + 2.5;
            this.currentAnimation = this.walk_animation[this.face];
        }

        if (this.hspeed !== 0 && this.vspeed !== 0) {
            this.hspeed /= 1.414;
            this.vspeed /= 1.414;
        }

        var obstacles = this.handler._getObstacles();

        if (!this.collideArray(obstacles)) {
            this.x += this.hspeed * this.speed;
            this.y += this.vspeed * this.speed;
        }
        if (this.currentAnimation !== null) this.currentAnimation._tick();

    };

    this._render = function(ctx) {
        if (this.hspeed === 0 && this.vspeed === 0) {
            this.walk_animation[this.face]._getFrameAt(0).draw(ctx, this.x, this.y);
        } else {
            this.currentAnimation._getFrame().draw(ctx, this.x, this.y);
        }
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(this.bound.x+this.x, this.bound.y+this.y, this.bound.width, this.bound.height);
    };

};