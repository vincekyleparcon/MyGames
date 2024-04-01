class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height/this.baseHeight;
        this.player = new Player(this);
      

        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
        //mouse control
        this.canvas.addEventListener('mousedown', e => {
            this.player.flap();
        });
        //keyboard control
        window.addEventListener('keydown', e =>{
            console.log(e.key);
            if (e.key === 'ArrowUp' || e.key === ' ' || e.key === 'w'){
                this.player.flap();
            };
        })
        //touchscreen
        this.canvas.addEventListener('touchstart', e => {
            this.player.flap();
        })
    }
    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = 'red';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height/this.baseHeight;

        this.gravity = 0.17 * this.ratio;
        this.player.resize();
        console.log(this.height, this.baseHeight, this.ratio);
    }
    render(){
        //this.ctx.fillStyle = 'red';
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