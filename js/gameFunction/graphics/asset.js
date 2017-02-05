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
        this.spr_player_sprint[0] = new Array(8);
        this.spr_player_sprint[1] = new Array(8);
        this.spr_player_sprint[2] = new Array(8);
        this.spr_player_sprint[3] = new Array(8);
        this.spr_player_walk[0][0] = new Sprite(img, 28 * 9 + 24, 56 * 3, 26, 56);
        this.spr_player_walk[0][2] = new Sprite(img, 28 * 9 + 50, 56 * 3, 28, 56);
        this.spr_player_walk[0][1] = new Sprite(img, 28 * 9 + 78, 56 * 3, 28, 56);
        this.spr_player_walk[0][4] = new Sprite(img, 28 * 9 + 106, 56 * 3, 26, 56);
        this.spr_player_walk[0][5] = new Sprite(img, 28 * 9 + 134, 56 * 3, 28, 56);
        this.spr_player_walk[0][3] = new Sprite(img, 28 * 9 + 24, 56 * 3, 26, 56);
        this.spr_player_walk[1][1] = new Sprite(img, 28 * 4, 56 * 2, 28, 56);
        this.spr_player_walk[1][2] = new Sprite(img, 28 * 6, 56 * 3, 28, 56);
        this.spr_player_walk[1][3] = new Sprite(img, 28 * 9, 56 * 3, 26, 56);
        this.spr_player_walk[1][4] = new Sprite(img, 28 * 7, 56 * 3, 28, 56);
        this.spr_player_walk[1][5] = new Sprite(img, 28 * 8, 56 * 3, 28, 56);
        this.spr_player_walk[1][0] = new Sprite(img, 28 * 9, 56 * 3, 26, 56);
        this.spr_player_walk[2][4] = new Sprite(img, 28 * 4, 56 * 3, 28, 56);
        this.spr_player_walk[2][5] = new Sprite(img, 28 * 7, 56 * 2, 28, 56);
        this.spr_player_walk[2][0] = new Sprite(img, 28 * 3, 56 * 3, 28, 56);
        this.spr_player_walk[2][1] = new Sprite(img, 28 * 5, 56 * 3, 28, 56);
        this.spr_player_walk[2][2] = new Sprite(img, 28 * 8, 56 * 2, 28, 56);
        this.spr_player_walk[2][3] = new Sprite(img, 28 * 3, 56 * 3, 28, 56);
        this.spr_player_walk[3][4] = new Sprite(img, 0, 56 * 3, 28, 56);
        this.spr_player_walk[3][5] = new Sprite(img, 28 * 2, 56 * 2, 28, 56);
        this.spr_player_walk[3][0] = new Sprite(img, 28 * 3, 56 * 2, 28, 56);
        this.spr_player_walk[3][1] = new Sprite(img, 28 * 3, 56 * 2, 28, 56);
        this.spr_player_walk[3][2] = new Sprite(img, 28, 56 * 3, 28, 56);
        this.spr_player_walk[3][3] = new Sprite(img, 28 * 3, 56 * 2, 28, 56);
        this.spr_player_sprint[0][0] = new Sprite(img, 230, 56, 36, 56);
        this.spr_player_sprint[0][1] = new Sprite(img, 266, 56, 36, 56);
        this.spr_player_sprint[0][2] = new Sprite(img, 302, 56, 38, 56);
        this.spr_player_sprint[0][3] = new Sprite(img, 340, 56, 42, 56);
        this.spr_player_sprint[0][4] = new Sprite(img, 382, 56, 37, 56);
        this.spr_player_sprint[0][5] = new Sprite(img, 419, 56, 37, 56);
        this.spr_player_sprint[0][6] = new Sprite(img, 456, 56, 42, 56);
        this.spr_player_sprint[0][7] = new Sprite(img, 498, 56, 44, 56);
        this.spr_player_sprint[1][0] = new Sprite(img, 226, 0, 42, 56);
        this.spr_player_sprint[1][1] = new Sprite(img, 268, 0, 42, 56);
        this.spr_player_sprint[1][2] = new Sprite(img, 310, 0, 37, 56);
        this.spr_player_sprint[1][3] = new Sprite(img, 347, 0, 37, 56);
        this.spr_player_sprint[1][4] = new Sprite(img, 384, 0, 42, 56);
        this.spr_player_sprint[1][5] = new Sprite(img, 426, 0, 38, 56);
        this.spr_player_sprint[1][6] = new Sprite(img, 464, 0, 36, 56);
        this.spr_player_sprint[1][7] = new Sprite(img, 500, 0, 36, 56);
        this.spr_player_sprint[2][0] = new Sprite(img, 28 * 2, 0, 28, 56);
        this.spr_player_sprint[2][1] = new Sprite(img, 28 * 2, 56 * 0, 28, 56);
        this.spr_player_sprint[2][2] = new Sprite(img, 28 * 6, 56 * 1, 28, 56);
        this.spr_player_sprint[2][3] = new Sprite(img, 28 * 4, 56 * 0, 28, 56);
        this.spr_player_sprint[2][4] = new Sprite(img, 28 * 3, 56 * 0, 28, 56);
        this.spr_player_sprint[2][5] = new Sprite(img, 28 * 3, 56 * 1, 28, 56);
        this.spr_player_sprint[2][6] = new Sprite(img, 28 * 7, 56 * 1, 28, 56);
        this.spr_player_sprint[2][7] = new Sprite(img, 28 * 5, 56 * 0, 28, 56);
        this.spr_player_sprint[3][0] = new Sprite(img, 28 * 5, 56 * 1, 28, 56);
        this.spr_player_sprint[3][1] = new Sprite(img, 28 * 0, 56 * 1, 28, 56);
        this.spr_player_sprint[3][2] = new Sprite(img, 28 * 0, 56 * 0, 28, 56);
        this.spr_player_sprint[3][3] = new Sprite(img, 28 * 4, 56 * 1, 28, 56);
        this.spr_player_sprint[3][4] = new Sprite(img, 28 * 7, 56 * 0, 28, 56);
        this.spr_player_sprint[3][5] = new Sprite(img, 28 * 1, 56 * 1, 28, 56);
        this.spr_player_sprint[3][6] = new Sprite(img, 28 * 1, 56 * 0, 28, 56);
        this.spr_player_sprint[3][7] = new Sprite(img, 28 * 6, 56 * 0, 28, 56);
        /*for (var i = 0; i < 8; ++i) {
            this.spr_player_walk[0][i] = new Sprite(img_player_walk_left, i*64, 0, 64, 72);
            this.spr_player_walk[1][7-i] = new Sprite(img_player_walk, (7-i)*64, 0, 64, 72);
        }*/

    }
}