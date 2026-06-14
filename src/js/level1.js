import {Scene} from "excalibur";
import {BeigeBG} from "./beigeBG.js";
import {Platform} from "./platform.js";
import {Crate} from "./crate.js";
import {BigPlatform} from "./bigPlatform.js";
import {SkinnyCat} from "./skinnyCat.js";
import {FatCat} from "./fatCat.js";

export class Level1 extends Scene {

    onInitialize(engine) {
        super.onInitialize(engine);

        const beigeBG = new BeigeBG()
        this.add(beigeBG);

        // platforms
        let platformPositions = [
            {"x": 170, "y": 695},
            {"x": 1110, "y": 695}
        ]
        for (let pos of platformPositions) {
            this.add(new Platform(pos.x, pos.y))
        }

        this.add(new BigPlatform(640, 695));

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