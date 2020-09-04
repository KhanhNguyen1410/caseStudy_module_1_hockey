let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let red, blue, green;
let startGame;
let score1 = DEFAULT_SCORE;
let score2 = DEFAULT_SCORE;


let ball = new Ball();
ball.drawBall();

let bar1 = new Bars1();
bar1.drawBars1();

let bar2 = new Bars2();
bar2.drawBars2();

let backBar = new BackBar();
backBar.drawBackBar1();
backBar.drawBackBar2();


let notification = new Notification();

function getRandomColor() {
    red = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + blue + "," + green + ")";
}

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);


function onKeyDown(evt) {
    switch (evt.which) {
        case KEY_LEFT1:
            bar1.isLeft = true;
            break;
        case KEY_LEFT2:
            bar2.isLeft = true;
            break;
        case KEY_RIGHT1:
            bar1.isRight = true;
            break;
        case KEY_RIGHT2:
            bar2.isRight = true;
            break;
        case 38:
            ball.Yspeed = 3;
            ball.Xspeed = 3;
            break;
        case 87:
            ball.Yspeed = -3;
            ball.Xspeed = -3;
            break;
    }
}

function onKeyUp(evt) {
    switch (evt.which) {
        case KEY_LEFT1:
            bar1.isLeft = false;
            break;
        case KEY_LEFT2:
            bar2.isLeft = false;
            break;
        case KEY_RIGHT1:
            bar1.isRight = false;
            break;
        case KEY_RIGHT2:
            bar2.isRight = false;
            break;
    }
}

function win() {
    if (score1 >= SCORE_WIN) {
        clearInterval(startGame);
        notification.showPlayer1Win(ctx);

    } else if (score2 >= SCORE_WIN) {
        clearInterval(startGame);
        notification.showPlayer2Win(ctx);
    }


}

function gameStart() {
    startGame = setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.drawBall();
        bar1.drawBars1();
        bar2.drawBars2();
        backBar.drawBackBar1();
        backBar.drawBackBar2();
        bar1.moveBars();
        bar2.moveBars();
        ball.moveBall1();
        backBar.moveBBAR();
        win();
    }, 1)
}

function start() {
    gameStart();

}

function reset() {
    window.location.reload();
}
