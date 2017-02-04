function Handler(game) {
    this.game = game;

    this._getKeyManager = function() {
        return this.game.keyManager;
    }

    this._getPlayer = function() {
        return this.game.player;
    }

    // asset
}