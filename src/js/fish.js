import {Actor, CollisionType} from "excalibur"
import {Resources} from './resources.js'

export class Fish extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Fish.width, height: Resources.Fish.height})
        this.graphics.use(Resources.Fish.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}