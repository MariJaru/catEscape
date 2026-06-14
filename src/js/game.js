import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Level2} from "./level2.js";
import {GameOver} from "./gameOver.js";
import {Level1} from "./level1.js";
import {GameCompleted} from "./gameCompleted.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            pixelArt: true,
            suppressPlayButton: false,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800)
            },
            suppressHiDPIScaling: true
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        const level1 = new Level1();
        this.add('level1', level1);
        const level2 = new Level2();
        this.add('level2', level2);
        this.add('game-over', new GameOver())
        this.add('game-completed', new GameCompleted())
        this.goToScene('level1')
    }

}

new Game()
