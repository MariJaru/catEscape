import {Actor, CollisionType, Keys, randomInRange, Vector, Animation} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Score} from "./score.js";
import {Lives} from "./lives.js";
import {Fish} from "./fish.js";


export class SkinnyCat extends Actor {
    livesLabel;
    scoreLabel;

    constructor(livesLabel, scoreLabel) {
        super({
            width: Resources.SkinnyCatSideView.width, height: Resources.SkinnyCatSideView.height
        })
        console.log("Meow");
        this.body.collisionType = CollisionType.Active;
        this.livesLabel = livesLabel
        this.scoreLabel = scoreLabel

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
        super.onInitialize(engine);
        this.pos = new Vector(1130, 514);
        this.body.mass = 6
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.score = 0
        this.lives = 3
    }

    hitSomething(event) {
        if (event.other.owner instanceof Fish) {
            console.log("nom nom")
            event.other.owner.kill()
            this.scoreLabel.incScore();
        }
    }

    onPreUpdate(engine) {
        let velX = 0
        let isMoving = false

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            velX = -250
            this.facingRight = false
            isMoving = true
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            velX = 250
            this.facingRight = true
            isMoving = true
        }
        if (engine.input.keyboard.wasPressed(Keys.Up) && (this.vel.y === 0)) {
            console.log("Jump!");
            this.body.applyLinearImpulse(new Vector(0, -4200));
        }
        this.vel.x = velX;

        // animation switching
        if (isMoving) {
            this.graphics.use("walk")
            this.graphics.offset = new Vector(0, 7);
        } else {
            this.graphics.use("idle")
            this.graphics.offset = new Vector(0, 0);
        }

        // flip based on direction
        this.graphics.flipHorizontal = this.facingRight


        // check out of bounds
        if (this.pos.y > 1200) {
            engine.goToScene('game-over')
        }
    }
}