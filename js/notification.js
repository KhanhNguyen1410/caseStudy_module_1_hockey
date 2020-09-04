class Notification{
    constructor() {
    }
   showPlayer1Win(ctx) {

        ctx.font = ("50px Arial");
        ctx.textAlign = "center";
        ctx.fillText("player 1 Win", canvas.width/2, canvas.height/2 )
       ctx.fillStyle = getRandomColor();
    }
    showPlayer2Win(ctx){

        ctx.font = ("50px Arial");
        ctx.textAlign = "center";
        ctx.fillText("player 2 Win", canvas.width/2, canvas.height/2 )
        ctx.fillStyle = getRandomColor();
    }

}