const PLAYER_SPRITE_B64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAE5JREFUOE9jZKAyYKSyeQyjBlIeoqNhOBqG0BBg/M/0/z/jP6JSBEFFIMNgIUuMobQ1ENk1xMb3P4a/DIyMjHCHIRhIXiPWMGxBMQINBADMTiAVLiEG8QAAAABJRU5ErkJggg==';


class Player {
    constructor(scl) {
        this.x = width / 2 - scl / 2;
        this.scl = scl;
        this.playerSprite = loadImage(PLAYER_SPRITE_B64);
    }

    move(dir) {
        this.x += dir * this.scl;
    }

    update() {
        this.x = constrain(this.x, 0, width - this.scl);
    }

    show() {
        image(this.playerSprite, this.x, height * 28/30);
    }
}  