class Obstacle {
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 110;
        this.spriteHeight = 110;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = Math.random() * this.game.height - this.scaledHeight;
        this.speedY = Math.random() < 0.5 ? -1 : 1;
    }
    update(){
        this.x -= this.game.speed * 1.5;
        this.y += this.speedY;
        if (this.y <= this.scaledHeight * -0.2 || this.y >= this.game.height - this.scaledHeight){
            this.speedY *= -1;
        }
    }
    draw(){
        this.game.ctx.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);
    }
    resize(){
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
    }
}