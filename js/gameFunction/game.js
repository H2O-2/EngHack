function Game() {


    this.currentState;
    this.states = new Array(5);

    this.keyManager = keyManager;

    this.bullets = [];

    this.enemies = [];

    this._init = function () {
        this.asset = new Asset();
        this.asset._init();
        this.handler = new Handler(this);
        var PLAYER = new gameObject(400, 400, null, 5, this.handler);
        Player.prototype = PLAYER;
        this.player = new Player();
        this.states[GAMESTATES.RUNNING] = new RunningState(this.handler);
        this.states[GAMESTATES.END] = null;
        this.currentState = GAMESTATES.RUNNING;
    };

    this._generateEnemy = function (level) {
        // set level later
        this.enemies = [];
        for (var i = 0; i < 5; ++i) {
            var xpos = Math.random() * WIDTH;
            var ENEMY = new gameObject(xpos, -50, null, 4, this.handler);
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
        //ctx.clearRect(0 ,0 WIDTH, HEIGHT);
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        this.states[this.currentState]._render(ctx);
    }
}