const SCALE = 20;
const ENEMY_ROWS = 5;
const ENEMY_COLS = 11;

var p;
var e;
var bullets = [];

function setup() {
    createCanvas(600, 600);
    p = new Player(SCALE);
    e = new Enemies(SCALE, ENEMY_ROWS, ENEMY_COLS);

    frameRate(10);
}

function keyPressed() {
    if (keyCode === 32) { // 32 is the ASCII code for the spacebar
        bullets.push(new Bullet(e, p.getX(), SCALE));
    }
}

function draw() {
    background(51);

    if (keyIsDown(RIGHT_ARROW)) {
        p.move(1);
    } else if (keyIsDown(LEFT_ARROW)) {
        p.move(-1);
    }

    var impacts = [];

    for(var i = 0; i < bullets.length; i++) {
        if (bullets[i].update()) {
            impacts.push(i);
        }

        bullets[i].show();
    }

    for(var i = 0; i < impacts.length; i++) {
        bullets.splice(impacts[i], 1);
    }

    e.update();
    e.show();

    p.update();
    p.show();
}