function Handler(game) {
    this.game = game;

    this._getKeyManager = function() {
        return this.game.keyManager;
    };

    this._getPlayer = function() {
        return this.game.player;
    };

    this._getBullets = function () {
        return this.game.bullets;
    };

    this._getAsset = function () {
        return this.game.asset;
    };

    this._getEnemies = function () {
        return this.game.enemies;
    };
}