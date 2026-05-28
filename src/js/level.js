import {Scene} from "excalibur";
import {BeigeBG} from "./beigeBG.js";

export class Level extends Scene {
    onInitialize(engine) {
        super.onInitialize(engine);
        const beigeBG = new BeigeBG()
        this.add(beigeBG);
    }
}