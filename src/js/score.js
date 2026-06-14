import {FontUnit, Label, Color, Font, Vector} from "excalibur";

export class Score extends Label {
    score = 0;

    onInitialize(engine) {
        this.useScreenCoordinates = true;

        this.pos = new Vector(100, 50);

        this.font = new Font({
            family: "Arial",
            size: 24,
            unit: FontUnit.Px,
            color: Color.Black
        });

        this.text = "Score: 0";
    }

    incScore() {
        this.score++;
        this.text = `Score: ${this.score}`;
    }
}