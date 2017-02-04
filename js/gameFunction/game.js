function Game() {


    this.currentState;
    this.states = new Array(5);

    this.keyManager = keyManager;

    this.bullets = [];

    this._init = function () {
        this.handler = new Handler(this);
        var PLAYER = new gameObject(0, 0, null, 5, this.handler);
        Player.prototype = PLAYER;
        this.player = new Player();
        this.states[GAMESTATES.RUNNING] = new RunningState(this.handler);
        this.states[GAMESTATES.END] = null;
        this.currentState = GAMESTATES.RUNNING;
    }

    this._tick = function () {
        this.keyManager._tick();
        this.states[this.currentState]._tick();
    }

    this._render = function (ctx) {
        //ctx.clearRect(0 ,0 WIDTH, HEIGHT);
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        this.states[this.currentState]._render(ctx);
    }
}