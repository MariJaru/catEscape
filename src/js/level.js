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

        this.skinnyCat = new SkinnyCat();
        this.add(this.skinnyCat);

        this.fatCat = new FatCat();
        this.add(this.fatCat);
    }

    onPostUpdate(engine, delta) {
        // make camera follow the players
        const camera = engine.currentScene.camera;

        const centerX = (this.skinnyCat.pos.x + this.fatCat.pos.x) / 2;
        const centerY = (this.skinnyCat.pos.y + this.fatCat.pos.y) / 2;

        camera.pos.x += (centerX - camera.pos.x) * 0.1;
        camera.pos.y += (centerY - camera.pos.y) * 0.1;
    }
}