import {Actor, CollisionType} from "excalibur"
import {Resources} from './resources.js'
import {Crate} from "./crate.js";

export class Platform extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Platform.width, height: Resources.Platform.height})
        this.graphics.use(Resources.Platform.toSprite())
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