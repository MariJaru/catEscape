import {Actor, CollisionType} from "excalibur";
import {Resources} from './resources.js';
import {FatCat} from "./fatCat.js";

export class GreenDoor extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.GreenDoor.width, height: Resources.GreenDoor.height})
        this.graphics.use(Resources.GreenDoor.toSprite())
        this.body.collisionType = CollisionType.Passive
    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => {
            const actor = event.other.owner;

            console.log(actor);
            console.log(actor.constructor.name);

            if (actor instanceof FatCat) {
                console.log("Fat cat reached green door");

                this.scene.fatDone = true;
                this.scene.checkWinCondition();
            }
        });
    }
}