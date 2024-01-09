const SPREAD_FACTOR = 1.5;
const ENEMY_SPRITE_B64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAIBJREFUOE/lk0sOwCAIROX+h8awoEEKg0Q3TV0ZgcfwkcblQ5d548NAJmZiSivI7LDkLAglK3vogyvlsKRqA6KWhEBRUcHU7qEvoIWJcwT37xb6ADuqMvUCXoCaqQO3MRCIdlAV2onrPVV4DPR98WVHA9pem92VifzKn9KF/xA4AYZJZBVjjUDnAAAAAElFTkSuQmCC';


class Enemies {
    constructor(scl, rows, cols) {
        this.enemySprite = loadImage(ENEMY_SPRITE_B64);

        this.x = width/2;
        this.y = scl;
        this.dir = 1;
        this.scl = scl;
        this.speed = 5;

        this.xOffset = cols/2 * scl * SPREAD_FACTOR;
        this.x -= this.xOffset;

        var enemiesRow = new Array(cols).fill(true);
        this.livingEnemies = [];
        for (var i = 0; i < rows; i++)  {
            this.livingEnemies.push(enemiesRow.slice());
        }
    }

  
    update() {
        this.x += this.dir * this.speed;

        if (this.x < 0) {
            this.dir *= -1;
            this.x *= -1;
        } else if (this.x > width - 2 * this.xOffset) {
            this.dir *= -1;
            const overrun = this.x - (width - 2 * this.xOffset);
            this.x = width - 2 * this.xOffset - overrun;
        }
    }

    show() {
        for (var i = 0; i < this.livingEnemies.length; i++) {
            for (var j = 0; j < this.livingEnemies[i].length; j++) {
                if (this.livingEnemies[i][j]) {
                    image(this.enemySprite, this.x + this.scl * j * SPREAD_FACTOR, this.y + this.scl * i * SPREAD_FACTOR);
                }
            }
        }
    }

    checkCollision(x, y) {
        for (var i = 0; i < this.livingEnemies.length; i++) {
            for (var j = 0; j < this.livingEnemies[i].length; j++) {
                if (this.livingEnemies[i][j]) {
                    var enemyX = this.x + this.scl * j * SPREAD_FACTOR;
                    var enemyY = this.y + this.scl * i * SPREAD_FACTOR;

                    if (x >= enemyX && x <= enemyX + this.scl * SPREAD_FACTOR && y >= enemyY && y <= enemyY + this.scl * SPREAD_FACTOR) {
                        this.livingEnemies[i][j] = false;
                        return true;
                    }
                }
            }
        }

        return false;
    }



}  