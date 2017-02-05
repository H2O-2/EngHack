var Player = function() {

    this.createBullet = 0;
    this.face = 2;
    this.team = TEAM.ONE;
    this.shootingAlarm = new Alarm();

    //this.walk_animation = new Animation(10, this.handler._getAsset().spr_player);

    this._tick = function() {
        this.hspeed = this.handler._getKeyManager().rightKey - this.handler._getKeyManager().leftKey;
        this.vspeed = this.handler._getKeyManager().downKey - this.handler._getKeyManager().upKey;

        if (this.hspeed !== 0) {
            this.face = this.hspeed / 2 + 0.5;
        } else if (this.vspeed) {
            this.face = this.vspeed / 2 + 2.5;
        }

        if (this.hspeed !== 0 && this.vspeed !== 0) {
            this.x += this.hspeed * this.speed / 1.414;
            this.y += this.vspeed * this.speed / 1.414;
        } else {
            this.x += this.hspeed * this.speed;
            this.y += this.vspeed * this.speed;
        }

        this.createBullet = this.handler._getKeyManager().shootKey;
        var shootingAlarmResult = this.shootingAlarm._tick();
        if ((shootingAlarmResult === true || shootingAlarmResult === null ) && this.createBullet === 1) {
            var BULLET = new gameObject(this.x, this.y, null, 8, this.handler);
            Bullet.prototype = BULLET;
            var bullet = new Bullet(this.face, TEAM.ONE);
            bullet._init();
            this.handler._getBullets().push(bullet);
            this.shootingAlarm._init(10);
        }

        //this.walk_animation._tick();
    };

    this._render = function(ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, 50, 50);
        //this.walk_animation._getFrame().draw(ctx, this.x, this.y);
    };
};
