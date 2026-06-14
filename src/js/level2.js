import {Scene, SolverStrategy, Vector} from "excalibur";
import {BeigeBG} from "./beigeBG.js";
import {FatCat} from "./fatCat.js";
import {SkinnyCat} from "./skinnyCat.js";
import {Platform} from "./platform.js";
import {SmallPlatform} from "./smallPlatform.js";
import {BigPlatform} from "./bigPlatform.js";
import {Crate} from "./crate.js";
import {PressurePlate} from "./pressurePlate.js";

export class Level2 extends Scene {

    onInitialize(engine) {
        super.onInitialize(engine);
        this.engine = engine;

        const beigeBG = new BeigeBG()
        this.add(beigeBG);

        // small platforms
        let smallPlatformPositions = [
            {"x": 640, "y": 295},
            // only orange cat can jump here (without help)
            {"x": 640, "y": -155}
        ]
        for (let pos of smallPlatformPositions) {
            this.add(new SmallPlatform(pos.x, pos.y))
        }

        // platforms
        let platformPositions = [
            {"x": 170, "y": 695},
            {"x": 640, "y": 695},
            {"x": 1110, "y": 695},
            {"x": 405, "y": 495},
            {"x": 875, "y": 495}
        ]
        for (let pos of platformPositions) {
            this.add(new Platform(pos.x, pos.y))
        }

        // big platforms
        let bigPlatformPositions = [
            {"x": 325, "y": 95},
            {"x": 955, "y": 95}
        ]
        for (let pos of bigPlatformPositions) {
            this.add(new BigPlatform(pos.x, pos.y))
        }

        this.add(new Crate(325, 15));

        this.add(new PressurePlate(0, 95));

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