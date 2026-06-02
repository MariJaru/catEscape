import {Actor, Keys, randomInRange, Vector} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
// import {Score} from "./score.js";
// import {Health} from "./health.js";


export class FatCat extends Actor {
    // scoreLabel;
    // healthLabel;

    constructor(scoreLabel, healthLabel) {
        super({
            width: Resources.FatCat.width, height: Resources.FatCat.height
        })
        console.log("I am a cat")
        // this.scoreLabel = scoreLabel
        // this.healthLabel = healthLabel
    }

    onInitialize(engine) {
        this.graphics.use(Resources.FatCat.toSprite())
        this.pos = new Vector(500, 500)
        // this.on('collisionstart', (event) => this.hitSomething(event))
        // this.score = 0
        // this.health = 100
        // this.on(...)
    }

    onPreUpdate(engine) {
        let velX = 0
        let velY = 0

        if (engine.input.keyboard.isHeld(Keys.A) && this.pos.x > 100) {
            velX = -200
        }
        if (engine.input.keyboard.isHeld(Keys.D) && this.pos.x < 1180) {
            velX = 200
        }
        if (engine.input.keyboard.isHeld(Keys.W) && this.pos.y > 50) {
            velY = -200
        }
        this.vel = new Vector(velX, velY)
    }
}