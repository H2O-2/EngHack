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
        this.spr_player_walk[0] = new Array(6);
        this.spr_player_walk[1] = new Array(6);
        this.spr_player_walk[2] = new Array(6);
        this.spr_player_walk[3] = new Array(6);
        this.spr_player_walk[0][2] = new Sprite(img, 28 * 9 + 24, 56 * 3, 26, 56);
        this.spr_player_walk[0][4] = new Sprite(img, 28 * 9 + 50, 56 * 3, 28, 56);
        this.spr_player_walk[0][3] = new Sprite(img, 28 * 9 + 78, 56 * 3, 28, 56);
        this.spr_player_walk[0][1] = new Sprite(img, 28 * 9 + 106, 56 * 3, 26, 56);
        this.spr_player_walk[0][0] = new Sprite(img, 28 * 9 + 134, 56 * 3, 28, 56);
        this.spr_player_walk[0][5] = new Sprite(img, 28 * 9 + 24, 56 * 3, 26, 56);
        this.spr_player_walk[1][0] = new Sprite(img, 28 * 4, 56 * 2, 28, 56);
        this.spr_player_walk[1][1] = new Sprite(img, 28 * 6, 56 * 3, 28, 56);
        this.spr_player_walk[1][2] = new Sprite(img, 28 * 9, 56 * 3, 26, 56);
        this.spr_player_walk[1][3] = new Sprite(img, 28 * 7, 56 * 3, 28, 56);
        this.spr_player_walk[1][4] = new Sprite(img, 28 * 8, 56 * 3, 28, 56);
        this.spr_player_walk[1][5] = new Sprite(img, 28 * 9, 56 * 3, 26, 56);
        this.spr_player_walk[2][0] = new Sprite(img, 28 * 4, 56 * 3, 28, 56);
        this.spr_player_walk[2][1] = new Sprite(img, 28 * 7, 56 * 2, 28, 56);
        this.spr_player_walk[2][2] = new Sprite(img, 28 * 3, 56 * 3, 28, 56);
        this.spr_player_walk[2][3] = new Sprite(img, 28 * 5, 56 * 3, 28, 56);
        this.spr_player_walk[2][4] = new Sprite(img, 28 * 8, 56 * 2, 28, 56);
        this.spr_player_walk[2][5] = new Sprite(img, 28 * 3, 56 * 3, 28, 56);
        this.spr_player_walk[3][0] = new Sprite(img, 0, 56 * 3, 28, 56);
        this.spr_player_walk[3][1] = new Sprite(img, 28 * 2, 56 * 2, 28, 56);
        this.spr_player_walk[3][2] = new Sprite(img, 28 * 3, 56 * 2, 28, 56);
        this.spr_player_walk[3][3] = new Sprite(img, 28 * 3, 56 * 2, 28, 56);
        this.spr_player_walk[3][4] = new Sprite(img, 28, 56 * 3, 28, 56);
        this.spr_player_walk[3][5] = new Sprite(img, 28 * 3, 56 * 2, 28, 56);
        /*for (var i = 0; i < 8; ++i) {
            this.spr_player_walk[0][i] = new Sprite(img_player_walk_left, i*64, 0, 64, 72);
            this.spr_player_walk[1][7-i] = new Sprite(img_player_walk, (7-i)*64, 0, 64, 72);
        }*/

    }
}