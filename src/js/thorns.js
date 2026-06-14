import {Actor, CollisionType} from "excalibur"
import {Resources} from './resources.js'
import {FatCat} from "./fatCat.js";
import {SkinnyCat} from "./skinnyCat.js";
import {Lives} from "./lives.js";

export class Thorns extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Thorns.width, height: Resources.Thorns.height})
        this.graphics.use(Resources.Thorns.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => {
            if (
                event.other.owner instanceof SkinnyCat || event.other.owner instanceof FatCat
            ) {
                event.other.owner.livesLabel.decLives();
            }
        });
    }
}