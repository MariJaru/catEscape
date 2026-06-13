import {Engine, TextAlign, BaseAlign, Actor, Label, Keys, FontUnit, Vector, Color, Scene, Font} from 'excalibur'
import {Resources} from './resources.js'
import {BeigeBG} from "./beigeBG.js";

export class GameOver extends Scene {

    onInitialize(engine) {
        const bg = new Actor()
        bg.graphics.use(Resources.RedBG.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        this.add(bg)

        const catSkull = new Actor()
        catSkull.graphics.use(Resources.CatSkull.toSprite())
        catSkull.pos = new Vector(640, 300);
        this.add(catSkull);

        // een Label is een Actor die automatisch een Text graphic toevoegt.
        const label = new Label({
            text: 'Game over man!\nPress space to restart',
            pos: new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 3),
            font: new Font({
                unit: FontUnit.Px,
                family: 'PressStart',
                size: 20,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })
        this.add(label)
    }
}