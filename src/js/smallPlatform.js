import {Actor, CollisionType} from "excalibur"
import {Resources} from './resources.js'

export class SmallPlatform extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.SmallPlatform.width, height: Resources.SmallPlatform.height})
        this.graphics.use(Resources.SmallPlatform.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}