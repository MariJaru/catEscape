import {Actor, CollisionType, Keys, randomInRange, Vector, Animation} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Score} from "./score.js";
import {Lives} from "./lives.js";
import {Fish} from "./fish.js";

export class FatCat extends Actor {
    livesLabel;
    scoreLabel;

    constructor(livesLabel, scoreLabel) {
        super({
            width: Resources.FatCatRightSideview.width, height: Resources.FatCatRightSideview.height
        })
        console.log("Meow");
        this.body.collisionType = CollisionType.Active;
        this.livesLabel = livesLabel
        this.scoreLabel = scoreLabel


        // animations
        const rightIdle = Resources.FatCatRightSideview.toSprite();
        const leftIdle = Resources.FatCatLeftSideview.toSprite();

        const leftWalk1 = Resources.FatCatWalkingLeft1.toSprite();
        const leftWalk2 = Resources.FatCatWalkingLeft2.toSprite();

        const leftWalkAnimation = new Animation({
            frames: [
                {graphic: leftWalk1, duration: 300},
                {graphic: leftWalk2, duration: 300}
            ]
        })

        const rightWalk1 = Resources.FatCatWalkingRight1.toSprite()
        const rightWalk2 = Resources.FatCatWalkingRight2.toSprite()

        const rightWalkAnimation = new Animation({
            frames: [
                {graphic: rightWalk1, duration: 300},
                {graphic: rightWalk2, duration: 300}
            ]
        })

        this.graphics.add("rightIdle", rightIdle)
        this.graphics.add("leftIdle", leftIdle)
        this.graphics.add("leftWalk", leftWalkAnimation)
        this.graphics.add("rightWalk", rightWalkAnimation)

        this.graphics.use("rightIdle")

        // remember last direction
        this.facingRight = true
    }

    onInitialize(engine) {
        this.pos = new Vector(150, 514);
        this.body.mass = 7
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

        if (engine.input.keyboard.isHeld(Keys.A)) {
            velX = -200
            this.facingRight = false
            this.graphics.use("leftWalk");
            isMoving = true
        }
        if (engine.input.keyboard.isHeld(Keys.D)) {
            velX = 200
            this.facingRight = true
            this.graphics.use("rightWalk");
            isMoving = true
        }
        if (engine.input.keyboard.wasPressed(Keys.W) && (this.vel.y === 0)) {
            console.log("Jump!");
            this.body.applyLinearImpulse(new Vector(0, -4200));
        }

        this.vel.x = velX;

        // animation switching
        if (isMoving) {
            this.graphics.offset = new Vector(0, 7.5);
        } else {
            this.graphics.offset = new Vector(0, 0);
            if (this.facingRight === true) {
                this.graphics.use("rightIdle");
            } else {
                this.graphics.use("leftIdle");
            }
        }

        // check out of bounds
        if (this.pos.y > 1200) {
            engine.goToScene('game-over')
        }

    }
}