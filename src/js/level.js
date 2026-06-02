import {Scene} from "excalibur";
import {BeigeBG} from "./beigeBG.js";
import {FatCat} from "./fatCat.js";
import {SkinnyCat} from "./skinnyCat.js";

export class Level extends Scene {
    onInitialize(engine) {
        super.onInitialize(engine);

        const beigeBG = new BeigeBG()
        this.add(beigeBG);

        const skinnyCat = new SkinnyCat();
        this.add(skinnyCat);

        const fatCat = new FatCat();
        this.add(fatCat);

    }
}