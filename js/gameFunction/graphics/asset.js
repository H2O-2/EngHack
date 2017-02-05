var Asset = function() {
    // sprites
    // player
    this.spr_player_walk = new Array(4);
    this.spr_player_sprint = new Array(4);
    this.spr_enemy_walk = new Array(4);
    this.spr_player_attack = new Array(4);
    this.spr_Bullet = new Array(4);
    // initialize assets

    this._init = function() {
        // player idle
        // player walk
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

        this.spr_enemy_walk[0] = new Array(8);
        this.spr_enemy_walk[1] = new Array(8);
        this.spr_enemy_walk[2] = new Array(8);
        this.spr_enemy_walk[3] = new Array(8);

        this.spr_enemy_walk[3][1] = new Sprite(img, 25 * 15, 56 * 4, 29, 56);
        this.spr_enemy_walk[3][7] = new Sprite(img, 27 * 15, 56 * 4, 29, 56);
        this.spr_enemy_walk[3][0] = new Sprite(img, 29 * 15, 56 * 4, 32, 56);
        this.spr_enemy_walk[3][4] = new Sprite(img, 31.2 * 15, 56 * 4, 32, 56);
        this.spr_enemy_walk[3][5] = new Sprite(img, 20 * 15, 54 * 5, 32, 56);
        this.spr_enemy_walk[3][2] = new Sprite(img, 22.4 * 15, 54 * 5, 32, 56);
        this.spr_enemy_walk[3][6] = new Sprite(img, 25 * 15, 54 * 5, 32, 56);
        this.spr_enemy_walk[3][3] = new Sprite(img, 27 * 15, 54 * 5, 32, 56);

        this.spr_enemy_walk[2][4] = new Sprite(img, 29 * 15, 54 * 5, 32, 56);
        this.spr_enemy_walk[2][0] = new Sprite(img, 31 * 15, 54 * 5, 32, 56);
        this.spr_enemy_walk[2][3] = new Sprite(img, 33.2 * 15, 54 * 5, 32, 56);
        this.spr_enemy_walk[2][5] = new Sprite(img, 20 * 15, 53.3 * 6, 32, 56);
        this.spr_enemy_walk[2][6] = new Sprite(img, 22.4 * 15, 53.3 * 6, 32, 56);
        this.spr_enemy_walk[2][1] = new Sprite(img, 25 * 15, 53.3 * 6, 32, 56);
        this.spr_enemy_walk[2][2] = new Sprite(img, 27 * 15, 53.3 * 6, 32, 56);
        this.spr_enemy_walk[2][7] = new Sprite(img, 29 * 15, 53.3 * 6, 32, 56);

        this.spr_enemy_walk[1][1] = new Sprite(img, 24.4 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][4] = new Sprite(img, 27.4 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][3] = new Sprite(img, 30.4 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][2] = new Sprite(img, 20 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][6] = new Sprite(img, 24.4 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][0] = new Sprite(img, 27.4 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][7] = new Sprite(img, 30.4 * 15, 54 * 7.7, 46, 40);
        this.spr_enemy_walk[1][5] = new Sprite(img, 33.6 * 15, 54 * 7.7, 46, 40);

        this.spr_enemy_walk[0][2] = new Sprite(img, 24.2 * 15, 54 * 8.5, 45, 40);
        this.spr_enemy_walk[0][3] = new Sprite(img, 27.2 * 15, 54 * 8.5, 45, 40);
        this.spr_enemy_walk[0][4] = new Sprite(img, 30.2 * 15, 54 * 8.5, 45, 40);
        this.spr_enemy_walk[0][1] = new Sprite(img, 33.8 * 15, 54 * 8.5, 45, 40);
        this.spr_enemy_walk[0][5] = new Sprite(img, 24.2 * 15, 54 * 9.3, 45, 40);
        this.spr_enemy_walk[0][7] = new Sprite(img, 27.2 * 15, 54 * 9.3, 45, 40);
        this.spr_enemy_walk[0][0] = new Sprite(img, 30.2 * 15, 54 * 9.3, 45, 40);
        this.spr_enemy_walk[0][6] = new Sprite(img, 33.4 * 15, 54 * 9.3, 45, 40);

        this.spr_player_attack[0] = new Array(4);
        this.spr_player_attack[1] = new Array(4);
        this.spr_player_attack[2] = new Array(4);
        this.spr_player_attack[3] = new Array(4);

        this.spr_player_attack[0][0] = new Sprite(img, 240, 420, 50, 60);
        this.spr_player_attack[0][1] = new Sprite(img, 145, 420, 48, 60);
        this.spr_player_attack[0][2] = new Sprite(img, 95, 420, 48, 60);
        this.spr_player_attack[0][3] = new Sprite(img, 192, 420, 48, 60);
        this.spr_player_attack[1][0] = new Sprite(img, 0, 360, 50, 60);
        this.spr_player_attack[1][1] = new Sprite(img, 0, 300, 50, 60);
        this.spr_player_attack[1][2] = new Sprite(img, 50, 300, 50, 60);
        this.spr_player_attack[1][3] = new Sprite(img, 50, 360, 46, 60);
        this.spr_player_attack[2][0] = new Sprite(img, 192, 360, 48, 60);
        this.spr_player_attack[2][1] = new Sprite(img, 192, 295, 48, 60);
        this.spr_player_attack[2][2] = new Sprite(img, 140, 360, 48, 60);
        this.spr_player_attack[2][3] = new Sprite(img, 0, 420, 48, 60);
        this.spr_player_attack[3][0] = new Sprite(img, 100, 300, 45, 60);
        this.spr_player_attack[3][1] = new Sprite(img, 145, 300, 48, 60);
        this.spr_player_attack[3][2] = new Sprite(img, 95, 360, 50, 60);
        this.spr_player_attack[3][3] = new Sprite(img, 48, 420, 48, 60);

        this.spr_Bullet[0] = new Sprite(img, 0, 56 * 4, 45, 40);
        this.spr_Bullet[2] = new Sprite(img, 3 * 15, 56 * 4, 45, 40);
        this.spr_Bullet[1] = new Sprite(img, 0, 51.8 * 5, 45, 40);
        this.spr_Bullet[3] = new Sprite(img, 3 * 15, 51.8 * 5, 45, 40);

    }
}