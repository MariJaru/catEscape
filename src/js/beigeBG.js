import {Actor, Vector} from "excalibur"
import {Resources} from './resources.js'

export class BeigeBG extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.beigeBG.toSprite())
        this.pos = new Vector(400, 300)
    }
}