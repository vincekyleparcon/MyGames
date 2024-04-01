class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this);

        window.addEventListener('resize', e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
    }
    resize(width, height){
        this.canvas.width = e.currentTarget.innerWidth;
        this.canvas.height = e.currentTarget.innerHeight;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    render(){
        this.ctx.fillStyle = 'red';
        this.player.update();
        this.player.draw();
    }
}

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height  = 720;

    const game = new Game(canvas, ctx);
    game.render();

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    }
    this.requestAnimationFrame(animate);
});