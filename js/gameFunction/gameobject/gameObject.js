var gameObject = function (x, y, width, height, speed, handler) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.handler = handler;
    this.vspeed = 0;
    this.hspeed = 0;
    this.speed = speed;

    this.collide = function (other) {
        // ...
    }
}