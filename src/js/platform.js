import {Actor, Vector, CollisionType} from "excalibur"
import {Resources} from './resources.js'

export class Platform extends Actor {
    constructor() {
        super({width: Resources.Platform.width, height: Resources.Platform.height})
        this.graphics.use(Resources.Platform.toSprite())
        this.pos = new Vector(500, 512)
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}