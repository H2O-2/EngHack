var Game = function() {


    this.currentState;
    this.states = new Array(5);

    this.keyManager = keyManager;

    this.bullets = [];

    this.enemies = [];

    this.obstacles = [];

    this._init = function () {
        this.asset = new Asset();
        this.asset._init();
        this.handler = new Handler(this);
        var PLAYER = new gameObject(400, 400, new Rectangle(5,10,15,40), 5, this.handler);
        Player.prototype = PLAYER;
        this.player = new Player();
        var obstacle = new gameObject(200, 200, new Rectangle(0, 0, 100, 100), 0, this.handler);
        this.obstacles.push(obstacle);
        this.states[GAMESTATES.RUNNING] = new RunningState(this.handler);
        this.states[GAMESTATES.END] = null;
        this.currentState = GAMESTATES.RUNNING;
    };

    this._generateEnemy = function (level) {
        // set level later
        this.enemies = [];
        for (var i = 0; i < (level || 5); ++i) {
            var xpos = Math.random() * WIDTH;
            var ENEMY = new gameObject(xpos, -50, new Rectangle(0, 0, 30, 30), 3, this.handler);
            Enemy.prototype = ENEMY;
            var enemy = new Enemy();
            this.enemies.push(enemy);
        }
    };

    this._tick = function () {
        this.keyManager._tick();
        this.states[this.currentState]._tick();
    };

    this._render = function (ctx) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        this.states[this.currentState]._render(ctx);
    }
}