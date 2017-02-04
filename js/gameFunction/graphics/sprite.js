function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Sprite.prototype.draw = function(graphics, x, y) {
    graphics.drawImage(this.img, this.x, this.y, this.width, this.height,
        x, y, this.width, this.height);
};