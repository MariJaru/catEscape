import {Actor, CollisionType} from "excalibur"
import {Resources} from './resources.js'
import {Crate} from "./crate.js";

export class PressurePlate extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.PressurePlate.width, height: Resources.PressurePlate.height})
        this.graphics.use(Resources.PressurePlate.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => {
            const actor = event.other.owner;

            if (actor instanceof Crate) {
                // kill the electric fence
                event.other.owner.kill()
            }
        });
    }
}