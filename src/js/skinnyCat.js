import {Actor, Keys, randomInRange, Vector} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
// import {Score} from "./score.js";
// import {Health} from "./health.js";


export class SkinnyCat extends Actor {
    // scoreLabel;
    // healthLabel;

    constructor(scoreLabel, healthLabel) {
        super({
            width: Resources.SkinnyCat.width, height: Resources.SkinnyCat.height
        })
        console.log("I am a cat")
        // this.scoreLabel = scoreLabel
        // this.healthLabel = healthLabel
    }

    onInitialize(engine) {
        this.graphics.use(Resources.SkinnyCat.toSprite())
        this.pos = new Vector(randomInRange(0, 1280), (randomInRange(0, 720)))
        // this.on('collisionstart', (event) => this.hitSomething(event))
        // this.score = 0
        // this.health = 100
        // this.on(...)
    }

    onPreUpdate(engine) {
        let velX = 0
        let velY = 0

        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 100) {
            velX = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 1180) {
            velX = 250
        }
        if (engine.input.keyboard.isHeld(Keys.Up) && this.pos.y > 50) {
            velY = -250
        }
        this.vel = new Vector(velX, velY)
    }
}