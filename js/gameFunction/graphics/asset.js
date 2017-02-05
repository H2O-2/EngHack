var Asset = function() {
    // sprites
    // player
    this.spr_player;
    this.spr_player_walk = new Array(4);
    this.spr_player_sprint = new Array(4);

    // initialize assets

    this._init = function() {
        // player idle
        // player walk
        this.spr_player = new Sprite(img, 0, 0, 28, 56);
        this.spr_player_walk[0] = new Array(8);
        this.spr_player_walk[1] = new Array(8);
        /*for (var i = 0; i < 8; ++i) {
            this.spr_player_walk[0][i] = new Sprite(img_player_walk_left, i*64, 0, 64, 72);
            this.spr_player_walk[1][7-i] = new Sprite(img_player_walk, (7-i)*64, 0, 64, 72);
        }*/

    }
}