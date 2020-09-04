class BackBar {
    constructor() {
        this.x1 = X_BACK_BAR1;
        this.y1 = Y_BACK_BAR1;
        this.x2 = X_BACK_BAR2;
        this.y2 = Y_BACK_BAR2;
        this.WBackBar  = WIDTH_BACK_BAR;
        this.HBackBar = HEIGHT_BACK_BAR;
        // this.boundary = BIG_BAR_BACK;
        this.speed = SPEED_BAR;

    };
    drawBackBar1(){
        ctx.beginPath();
        ctx.rect(this.x1,this.y1,this.WBackBar,this.HBackBar);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        ctx.closePath();
    }
    drawBackBar2(){
        ctx.beginPath();
        ctx.rect(this.x2,this.y2,this.WBackBar,this.HBackBar);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        ctx.closePath();
    }
    moveBBar1(){
        this.x1 = this.x1 + this.speed;
    }
    moveBBar2(){
        this.x2 = this.x2 - this.speed
    }
    moveBBAR(){
        this.moveBBar1();
        this.moveBBar2();

        if (this.x1 == canvas.width - this.WBackBar){
            this.x1 = 0;
        }
        if (this.x2 == 0){
            this.x2 = canvas.width - this.WBackBar;
        }
    }
}