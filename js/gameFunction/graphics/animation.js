var Animation = function(tenf, sprite) {
    this.tenf = tenf; // tick every n frames
    this.timer = 0;

    this.sprite = sprite;
    this.index = 0;
    this.spriteLength = sprite.length;

    this._tick = function() {
        ++this.timer;
        if (this.timer == this.tenf) {
            this.timer = 0;
            ++this.index;
            if (this.index == this.spriteLength) {
                this.index = 0;
            }
        }
    }

    this._getFrame = function() {
        return this.sprite[this.index];
    }

    this._reset = function() {
        this.index = 0;
    }
};
