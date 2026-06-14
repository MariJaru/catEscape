import {Scene, SolverStrategy, Vector} from "excalibur";
import {BeigeBG} from "./beigeBG.js";
import {FatCat} from "./fatCat.js";
import {SkinnyCat} from "./skinnyCat.js";
import {Platform} from "./platform.js";
import {SmallPlatform} from "./smallPlatform.js";
import {BigPlatform} from "./bigPlatform.js";
import {Crate} from "./crate.js";
import {PressurePlate} from "./pressurePlate.js";
import {GreenDoor} from "./greenDoor.js";
import {BlueDoor} from "./blueDoor.js";
import {Thorns} from "./thorns.js";
import {Lives} from "./lives.js";
import {Score} from "./score.js";
import {Fish} from "./fish.js";

export class Level2 extends Scene {

    onInitialize(engine) {
        super.onInitialize(engine);
        this.engine = engine;

        this.skinnyDone = false;
        this.fatDone = false;

        const beigeBG = new BeigeBG();
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
            {"x": 875, "y": 495},
            {"x": 875, "y": 995},
            {"x": 405, "y": 995}
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

        this.add(new PressurePlate(0, 94));

        this.add(new GreenDoor(875, 890));
        this.add(new BlueDoor(405, 890));

        let thornPositions = [
            {"x": 875, "y": 875},
            {"x": 405, "y": 875}
        ]

        for (let pos of thornPositions) {
            this.add(new Thorns(pos.x, pos.y))
        }

        let fishPositions = [
            {"x": 640, "y": 645},
            {"x": 405, "y": 445},
            {"x": 875, "y": 445},
            {"x": 325, "y": 45},
            {"x": 955, "y": 45},
            {"x": 640, "y": 245},
            {"x": 640, "y": -195}
        ]

        for (let pos of fishPositions) {
            this.add(new Fish(pos.x, pos.y))
        }

        const livesLabel = new Lives();
        this.add(livesLabel);

        const scoreLabel = new Score();
        this.add(scoreLabel);

        this.skinnyCat = new SkinnyCat(livesLabel, scoreLabel);
        this.add(this.skinnyCat);
        livesLabel.setSkinnyCat(this.skinnyCat);

        this.fatCat = new FatCat(livesLabel, scoreLabel);
        this.add(this.fatCat);
        livesLabel.setFatCat(this.fatCat);
    }

    checkWinCondition() {
        if (this.skinnyDone && this.fatDone) {
            console.log("Level complete!");
            this.engine.goToScene("game-completed");
        }
    }

    removeThorns() {
        for (const actor of this.actors) {
            if (actor instanceof Thorns) {
                actor.kill();
            }
        }
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