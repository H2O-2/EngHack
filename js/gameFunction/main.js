var HEIGHT = $(window).height(),
    WIDTH = $(window).width();
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);
var lastTime, now = Date.now(), fps = 60, delta = 0;

var GAMESTATES = {RUNNING: 1, END: 2};

var DIRECTION = {LEFT: 0, RIGHT: 1, UP: 2, DOWN: 3};

var ENTITY_STATES = {IDLING: 0, MOVING: 1, CHASING: 3};

var TEAM = {ONE:1, TWO:2};


function main() {
    var game = new Game();
    game._init();
    game._generateEnemy();

    var ticks = 0, past = Date.now(), current;

    var loop = function() {
        lastTime = now;
        now = Date.now();
        delta += now - lastTime;
        if (delta >= 1000.0/fps) {
            delta = 0;
            ++ticks;
            game._tick();
            game._render(ctx);
        }
        current = Date.now();
        // fps check
        if (current - past >= 1000) {
            console.log('fps is '+ticks);
            ticks = 0;
            past = current;
        }
        window.requestAnimationFrame(loop, canvas);
    };
    window.requestAnimationFrame(loop, canvas);
}

var img = new Image();
img.onload = function() {
    main();
};
img.src = "js/assets/naruto_walk.png";