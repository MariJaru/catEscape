import {Actor, CollisionType, Keys, Vector} from "excalibur"
import {Resources} from './resources.js'
import {FatCat} from './fatCat.js';

export class Crate extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Crate.width, height: Resources.Crate.height})
        this.graphics.use(Resources.Crate.toSprite())
        this.body.collisionType = CollisionType.Passive
        this.body.friction = 0.5
    }

    onInitialize(engine) {
        // mass doesn't work in game, but it corresponds to pressure plate
        this.body.mass = 30
        this.fatCat = null;

        this.on('collisionstart', (event) => {
            const actor = event.other.owner;

            if (actor instanceof FatCat) {
                this.fatCat = actor;
            }
        });

        this.on('collisionend', (event) => {
            const actor = event.other.owner;

            if (actor instanceof FatCat) {
                this.fatCat = null;
            }
        });
    }

    onPreUpdate(engine) {
        if (this.fatCat) {
            this.vel.x = this.fatCat.vel.x;
        } else {
            this.vel.x = 0;
        }
    }
}
