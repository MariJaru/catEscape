import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Level} from "./level.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800)
            }
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        const level = new Level();
        this.add('level', level);
        this.goToScene('level')
    }

}

new Game()
