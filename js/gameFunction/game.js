function Game() {


    this.currentState;
    this.states = new Array(5);

    this.keyManager = keyManager;


    this._init = function () {
        this.handler = new Handler(this);
        this.player = new Player(0, 0, this.handler);
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