class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this);
    }
    render(){
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(100, 200, 350, 150);
    }
}

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height  = 720;

    const game = new Game(canvas, ctx);
    game.render();
});