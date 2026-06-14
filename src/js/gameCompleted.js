import {Engine, TextAlign, BaseAlign, Actor, Label, Keys, FontUnit, Vector, Color, Scene, Font} from 'excalibur'
import {Resources} from './resources.js'

export class GameCompleted extends Scene {

    onInitialize(engine) {
        super.onInitialize(engine);
        const bg = new Actor()
        bg.graphics.use(Resources.ConfettiBG.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        this.add(bg)

        const label = new Label({
            text: 'Game completed!\nreload to restart',
            pos: new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2),
            font: new Font({
                unit: FontUnit.Px,
                family: 'PressStart',
                size: 50,
                color: Color.Black,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })
        this.add(label)
    }

}