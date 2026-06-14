import {Engine, TextAlign, BaseAlign, Actor, Label, Keys, FontUnit, Vector, Color, Scene, Font} from 'excalibur'
import {Resources} from './resources.js'

export class GameOver extends Scene {

    onInitialize(engine) {
        super.onInitialize(engine);
        const bg = new Actor()
        bg.graphics.use(Resources.RedBG.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        this.add(bg)

        const catSkull = new Actor()
        catSkull.graphics.use(Resources.CatSkull.toSprite())
        catSkull.pos = new Vector(
            engine.screen.resolution.width / 2,
            engine.screen.resolution.height / 3
        );
        this.add(catSkull);

        const label = new Label({
            text: 'GAME OVER\nreload to restart',
            pos: new Vector(engine.screen.resolution.width / 2, 400),
            font: new Font({
                unit: FontUnit.Px,
                family: 'PressStart',
                size: 50,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })
        this.add(label)
    }
}