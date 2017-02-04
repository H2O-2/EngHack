var Rectangle = function (x, y, width, height) {
    this.recX = x;
    this.recY = y;
    this.width = width;
    this.height = height;
};


var gameObject = function (x, y, rectangle, speed, handler) {
    this.x = x;
    this.y = y;

    this.bound = rectangle;

    this.handler = handler;
    this.vspeed = 0;
    this.hspeed = 0;
    this.speed = speed;

    this.face = 3;

    this.collide = function (other) {
        // ...
    }
};