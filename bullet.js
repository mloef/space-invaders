const SPEED = 30;

class Bullet {
    constructor(enemies, x, scl) {
        this.enemies = enemies;
        this.y = height * 28/30;
        this.x = x;
        this.scl = scl;
    }

    update() {
        this.y -= SPEED;

        return this.enemies.checkCollision(this.x, this.y);
    }

    show() {
        fill(255);
        rect(this.x, this.y, this.scl, this.scl);
    }
}  