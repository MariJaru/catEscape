import {Scene, SolverStrategy, Vector} from "excalibur";
import {BeigeBG} from "./beigeBG.js";
import {FatCat} from "./fatCat.js";
import {SkinnyCat} from "./skinnyCat.js";
import {BigPlatform} from "./bigPlatform.js";

export class Level extends Scene {

    constructor() {
        super({
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 800)
            }
        })
    }

    onInitialize(engine) {
        super.onInitialize(engine);

        const beigeBG = new BeigeBG()
        this.add(beigeBG);

        this.add(new BigPlatform(230, 670));
        this.add(new BigPlatform(1050, 670));

        const skinnyCat = new SkinnyCat();
        this.add(skinnyCat);

        const fatCat = new FatCat();
        this.add(fatCat);
    }
}