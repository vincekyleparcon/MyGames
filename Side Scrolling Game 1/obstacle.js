class Obstacle {
    constructor(game, x){
        this.game = game;
        this.spriteWidth;
        this.spriteHeight;
        this.scaledwidth;
        this.scaledHeight;
        this.x = x;
        this.y = this.game.height * 0.5 - this.height;
    }
}