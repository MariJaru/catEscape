import {FontUnit, Label, Color, Font, Vector} from "excalibur";

export class Lives extends Label {
    lives = 3;
    fatCat;
    skinnyCat;

    setFatCat(fatCat) {
        this.fatCat = fatCat;
    }

    setSkinnyCat(skinnyCat) {
        this.skinnyCat = skinnyCat;
    }

    onInitialize(engine) {
        this.useScreenCoordinates = true;

        this.pos = new Vector(100, 100);

        this.font = new Font({
            family: "Arial",
            size: 24,
            unit: FontUnit.Px,
            color: Color.Black
        });

        this.text = "Lives: 3";
    }

    decLives() {
        this.lives -= 1;

        if (this.lives < 0) {
            this.lives = 0;
        }

        this.text = `Lives: ${this.lives}`;

        if (this.lives <= 0) {
            this.fatCat.kill();
            this.skinnyCat.kill();
            this.scene.engine.goToScene("game-over");
        }
    }
}