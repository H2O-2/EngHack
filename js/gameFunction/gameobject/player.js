var PLAYERSTATE = {IDLING: 0, MOVING: 1, SPRINTING : 2, ATTACKING: 3};

var Player = function() {

    this.createBullet = 0;
    this.face = 2;
    this.team = TEAM.ONE;
    this.shootingAlarm = new Alarm();

    this.state = PLAYERSTATE.IDLING;

    this.walk_animation = [
        new Animation(7, this.handler._getAsset().spr_player_walk[0]),
        new Animation(7, this.handler._getAsset().spr_player_walk[1]),
        new Animation(7, this.handler._getAsset().spr_player_walk[2]),
        new Animation(7, this.handler._getAsset().spr_player_walk[3]),
    ];

    this.sprint_animation = [
        new Animation(7, this.handler._getAsset().spr_player_sprint[0]),
        new Animation(7, this.handler._getAsset().spr_player_sprint[1]),
        new Animation(7, this.handler._getAsset().spr_player_sprint[2]),
        new Animation(7, this.handler._getAsset().spr_player_sprint[3]),
    ];

    this.currentAnimation = null;

    this._tick = function() {
        this.hspeed = this.handler._getKeyManager().rightKey - this.handler._getKeyManager().leftKey;
        this.vspeed = this.handler._getKeyManager().downKey - this.handler._getKeyManager().upKey;

        if (this.hspeed !== 0) {
            this.face = this.hspeed / 2 + 0.5;
            this.state = PLAYERSTATE.MOVING;
            this.currentAnimation = this.walk_animation[this.face];
        } else if (this.vspeed !== 0) {
            this.face = this.vspeed / 2 + 2.5;
            this.state = PLAYERSTATE.MOVING;
            this.currentAnimation = this.walk_animation[this.face];
        } else {
            this.state = PLAYERSTATE.IDLING;
            this.currentAnimation = null;
        }

        var scale = 1;
        if (this.handler._getKeyManager().shitfKey === 1) {
            scale = 1.6;
            this.state = PLAYERSTATE.SPRINTING;
            this.currentAnimation = this.sprint_animation[this.face];
        }

        if (this.hspeed !== 0 && this.vspeed !== 0) {
            this.hspeed /= 1.414;
            this.vspeed /= 1.414;
        }

        var obstacles = this.handler._getObstacles();

        var enemies = this.handler._getEnemies();

        if (!this.collideArray(obstacles)) {
            this.x += scale * this.hspeed * this.speed;
            this.y += scale * this.vspeed * this.speed;
        }

        this.createBullet = this.handler._getKeyManager().shootKey;
        var shootingAlarmResult = this.shootingAlarm._tick();
        if ((shootingAlarmResult === true || shootingAlarmResult === null ) && this.createBullet === 1) {
            var BULLET = new gameObject(this.x, this.y, new Rectangle(0, 0, 10, 10), 8, this.handler);
            Bullet.prototype = BULLET;
            var bullet = new Bullet(this.face, TEAM.ONE);
            bullet._init();
            this.handler._getBullets().push(bullet);
            this.shootingAlarm._init(10);
        }

        if (this.currentAnimation !== null) this.currentAnimation._tick();

    };

    this._render = function(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x+this.bound.x, this.y+this.bound.y, this.bound.width, this.bound.height);

        if (this.vspeed === 0 && this.hspeed === 0) {
            this.walk_animation[this.face]._getFrameAt(0).draw(ctx, this.x, this.y);
        } else {
            this.currentAnimation._getFrame().draw(ctx, this.x, this.y);
        }
    };
};
