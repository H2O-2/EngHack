window.addEventListener( "keyup", this.keyUp, true);
window.addEventListener( "keydown", this.keyDown, true);

window.addEventListener( "mousemove", function(e) {
    if (!keyManager) return;
    keyManager.mouseX = e.clientX;
    keyManager.mouseY = e.clientY;
});

var KEYEVENT = {SPACE: 32, VK_LEFT: 65, VK_UP: 87, VK_RIGHT: 68, VK_DOWN: 83, SHOOT: 69};

function KeyManager() {
    // fields
    this.keys = new Array(256);

    this.mouseX = 0;
    this.mouseY = 0;

    this.upKey = 0;
    this.downKey = 0;
    this.leftKey = 0;
    this.rightKey = 0;
    this.spaceKey = 0;
    this.shootKey = 0;

    this.pressed = false;
    this.takeInput = false;

    this._init = function () {
        for (var i = 0; i < 256; ++i) {
            this.keys[i] = 0;
        }
    };
    // methods
    this._tick = function() {
        this.upKey = this.keys[KEYEVENT.VK_UP];
        this.downKey = this.keys[KEYEVENT.VK_DOWN];
        this.leftKey = this.keys[KEYEVENT.VK_LEFT];
        this.rightKey = this.keys[KEYEVENT.VK_RIGHT];
        this.spaceKey = this.keys[KEYEVENT.SPACE];
        this.shootKey = this.keys[KEYEVENT.SHOOT];
    };

};

var keyManager = new KeyManager();
keyManager._init();

function keyDown(e) {
    keyManager.keys[e.keyCode] = 1;
};

function keyUp(e) {
    keyManager.keys[e.keyCode] = 0;
};



