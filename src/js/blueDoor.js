import {Actor, CollisionType} from "excalibur";
import {Resources} from './resources.js';
import {SkinnyCat} from "./skinnyCat.js";

export class BlueDoor extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.BlueDoor.width, height: Resources.BlueDoor.height});
        this.graphics.use(Resources.BlueDoor.toSprite());
        this.body.collisionType = CollisionType.Passive;
    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => {
            const actor = event.other.owner;

            console.log(actor);
            console.log(actor.constructor.name);

            if (actor instanceof SkinnyCat) {
                console.log("Skinny cat reached blue door");

                this.scene.skinnyDone = true;
                this.scene.checkWinCondition();
            }
        });
    }
}