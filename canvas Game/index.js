var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballRadius = 13;
var dx = 2;
var dy = -2;
var paddleHeight = 20;
var paddlewidth = 72;
var paddleX = (canvas.width - paddlewidth) / 2;
var rightPressed = false;
var leftPressed = false;
var score = 0;
document.addEventListener("keydown", keyDowmHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDowmHandler(e) {
    if (e.keyCode == 39)
        rightPressed = true;
    else if (e.keyCode == 37)
        leftPressed = true;
}

function keyUpHandler(e) {
    if (e.keyCode == 39)
        rightPressed = false;
    else if (e.keyCode == 37)
        leftPressed = false;
}



function drawBall() {
    ctx.beginPath();
    //      x     y   r  0start 0end      clockwise/anticlockwise
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

}

function drawPaddle() {
    ctx.beginPath();
    //      x     y   r  0start 0end      clockwise/anticlockwise
    ctx.rect(paddleX, canvas.height - paddleHeight, paddlewidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

}


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {

        dx = -dx;
    }
    if (y + dy < ballRadius) {

        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x >= paddleX && x <= paddleX + paddlewidth) {
            score++;
            dy = -dy;
        } else {

            alert("your score: " + score + "\n Game over");
            y = canvas.height - 30;
            location.reload();

        }
    }




    if (rightPressed && paddleX < canvas.width - paddlewidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

}
setInterval(draw, 7);