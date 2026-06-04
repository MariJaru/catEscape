import {Actor, CollisionType, Keys, randomInRange, Vector} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
// import {Score} from "./score.js";
// import {Health} from "./health.js";


export class SkinnyCat extends Actor {
    // scoreLabel;
    // healthLabel;

    constructor() {
        super({
            width: Resources.SkinnyCatSideView.width, height: Resources.SkinnyCatSideView.height
        })
        console.log("Meow")
        this.body.collisionType = CollisionType.Active;
        // this.scoreLabel = scoreLabel
        // this.healthLabel = healthLabel

        // animations
        const idle = Resources.SkinnyCatSideView.toSprite()

        const walk1 = Resources.SkinnyCatWalking1.toSprite()
        const walk2 = Resources.SkinnyCatWalking2.toSprite()

        const walkAnimation = new Animation({
            frames: [
                {graphic: walk1, duration: 300},
                {graphic: walk2, duration: 300}
            ]
        })

        this.graphics.add("idle", idle)
        this.graphics.add("walk", walkAnimation)

        this.graphics.use("idle")

        // remember last direction
        this.facingRight = false
    }


    onInitialize(engine) {
        this.pos = new Vector(1130, 514);
        this.body.mass = 6
        // this.on('collisionstart', (event) => this.hitSomething(event))
        // this.score = 0
        // this.health = 100
        // this.on(...)
    }

    onPreUpdate(engine) {
        let velX = 0

        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 60) {
            velX = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 1220) {
            velX = 250
        }
        if (engine.input.keyboard.wasPressed(Keys.Up)) {
            console.log("Jump!");
            this.body.applyLinearImpulse(new Vector(0, -4200));
        }
        this.vel.x = velX;
    }
}