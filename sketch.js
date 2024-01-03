const SCALE = 20;
const ENEMY_ROWS = 5;
const ENEMY_COLS = 11;

var p;
var e;

function setup() {
    createCanvas(600, 600);
    p = new Player(SCALE);
    e = new Enemies(SCALE, ENEMY_ROWS, ENEMY_COLS);

    frameRate(10);
}

function draw() {
    background(51);

    if (keyIsDown(RIGHT_ARROW)) {
        p.move(1);
    } else if (keyIsDown(LEFT_ARROW)) {
        p.move(-1);
    }

    e.update();
    e.show();

    p.update();
    p.show();
}