import {Scene, SolverStrategy, Vector} from "excalibur";
import {BeigeBG} from "./beigeBG.js";
import {FatCat} from "./fatCat.js";
import {SkinnyCat} from "./skinnyCat.js";
import {BigPlatform} from "./bigPlatform.js";

export class Level extends Scene {

    onInitialize(engine) {
        super.onInitialize(engine);

        const beigeBG = new BeigeBG()
        this.add(beigeBG);

        this.add(new BigPlatform(170, 695));
        this.add(new BigPlatform(1110, 695));
        this.add(new BigPlatform(640, 695));
        this.add(new BigPlatform(405, 495));
        this.add(new BigPlatform(875, 495));

        const skinnyCat = new SkinnyCat();
        this.add(skinnyCat);

        const fatCat = new FatCat();
        this.add(fatCat);
    }
}