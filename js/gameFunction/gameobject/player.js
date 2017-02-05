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

    this.attack_animation = [
        new Animation(10, this.handler._getAsset().spr_player_attack[0]),
        new Animation(10, this.handler._getAsset().spr_player_attack[1]),
        new Animation(10, this.handler._getAsset().spr_player_attack[2]),
        new Animation(10, this.handler._getAsset().spr_player_attack[3]),
    ];

    this.currentAnimation = null;

    this._tick = function() {

        if (this.state === PLAYERSTATE.ATTACKING) {
            console.log(this.face)
            this.attack_animation[this.face]._tick();
            console.log(this.attack_animation[this.face].index)
            if (this.attack_animation[this.face].index === 3) {
                this.state = PLAYERSTATE.IDLING;
                this.currentAnimation = null;
                this.attack_animation[this.face].index = 0;
            }
            return;
        }

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

        var temp = this.speed;
        if (this.handler._getKeyManager().shitfKey === 1 && (this.vspeed !== 0 || this.hspeed !== 0)) {
            this.speed *= 1.6;
            this.state = PLAYERSTATE.SPRINTING;
            this.currentAnimation = this.sprint_animation[this.face];
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

        this.speed = temp;

        this.createBullet = this.handler._getKeyManager().shootKey;
        var shootingAlarmResult = this.shootingAlarm._tick();
        if ((shootingAlarmResult === true || shootingAlarmResult === null ) && this.createBullet === 1) {
            var BULLET = new gameObject(this.x-(this.face===DIRECTION.RIGHT?15:0), this.y, new Rectangle(5, 5, 30, 30), 8, this.handler);
            Bullet.prototype = BULLET;
            var bullet = new Bullet(this.face, TEAM.ONE);
            this.face = bullet._init();
            this.handler._getBullets().push(bullet);
            this.shootingAlarm._init(10);
            this.state = PLAYERSTATE.ATTACKING;
            this.currentAnimation = this.attack_animation[this.face];
        }

        if (this.currentAnimation !== null) this.currentAnimation._tick();

    };

    this._render = function(ctx) {

        if (this.state === PLAYERSTATE.IDLING) {
            this.walk_animation[this.face]._getFrameAt(0).draw(ctx, this.x, this.y);
        } else {
            this.currentAnimation._getFrame().draw(ctx, this.x, this.y);
        }
    };
};
