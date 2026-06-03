import {Actor, CollisionType, Keys, randomInRange, Vector} from "excalibur";
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
        console.log("I am a cat");
        this.body.collisionType = CollisionType.Active;
        // this.scoreLabel = scoreLabel
        // this.healthLabel = healthLabel
    }

    onInitialize(engine) {
        this.graphics.use(Resources.SkinnyCat.toSprite())
        this.pos = new Vector(1130, 514);
        this.body.mass = 5
        // this.on('collisionstart', (event) => this.hitSomething(event))
        // this.score = 0
        // this.health = 100
        // this.on(...)
    }

    onPreUpdate(engine) {
        let velX = 0

        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 100) {
            velX = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 1180) {
            velX = 250
        }
        if (engine.input.keyboard.wasPressed(Keys.Up)) {
            console.log("Jump!");
            this.body.applyLinearImpulse(new Vector(0, -3000));
        }
        this.vel.x = velX;
    }
}