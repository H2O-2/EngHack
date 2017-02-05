var Rectangle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};


var gameObject = function (x, y, rectangle, speed, handler) {
    this.x = x;
    this.y = y;

    this.destroyed = false;

    this.bound = rectangle;

    this.handler = handler;
    this.vspeed = 0;
    this.hspeed = 0;
    this.speed = speed;

    this.face = 3;

    this.collide = function(other) {
        var bound1 = this.bound, bound2 = other.bound;
        // check vertical movement
        if (this.x+bound1.x+bound1.width+this.speed*this.hspeed > other.x+bound2.x+other.speed*other.hspeed &&
            this.x+bound1.x+this.speed*this.hspeed < other.x+bound2.x+bound2.width+other.speed*other.hspeed) {
            // downward
            if (this.y+bound1.y+bound1.height <= other.y+bound2.y &&
                this.y+bound1.y+bound1.height+this.vspeed*this.speed >= other.y+bound2.y+other.speed*other.vspeed) {
                this.y = other.y+bound2.y-bound1.y-bound1.height;
                this.x += this.hspeed*this.speed;
                return true;
            }
            // upward
            if (this.y+bound1.y >= other.y+bound2.y+bound2.height &&
                this.y+bound1.y+this.vspeed*this.speed <= other.y+bound2.y+bound2.height+other.speed*other.vspeed) {
                this.y = other.y+bound2.y+bound2.height-bound1.y;
                this.x += this.hspeed*this.speed;
                return true;
            }
        }
        // check horizontal movement
        if (this.y+bound1.y+bound1.height+this.speed*this.vspeed > other.y+bound2.y+other.speed*other.vspeed &&
            this.y+bound1.y+this.speed*this.vspeed < other.y+bound2.y+bound2.height+other.speed*other.vspeed) {
            // left
            if (this.x+bound1.x+bound1.width <= other.x+bound2.x &&
                this.x+bound1.x+bound1.width+this.hspeed*this.speed >= other.x+bound2.x+other.speed*other.hspeed) {
                this.x = other.x+bound2.x-bound1.x-bound1.width;
                this.y += this.vspeed*this.speed;
                return true;
            }
            // right
            if (this.x+bound1.x >= other.x+bound2.x+bound2.width &&
                this.x+bound1.x+this.hspeed*this.speed <= other.x+bound2.x+bound2.width+other.speed*other.hspeed) {
                this.x = other.x+bound2.x-bound1.x+bound2.width;
                this.y += this.vspeed*this.speed;
                return true;
            }
        }
        return false;
    };

    this.collideArray = function(arr) {
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === this) continue;
            if (this.collide(arr[i])) return true;
        }
        return false;
    };

    this._render = function(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x+this.bound.x, this.y+this.bound.y, this.bound.width, this.bound.height);
    };
};