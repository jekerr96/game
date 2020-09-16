import {BasePage} from "./base";
import Game from "../game-engine/game";
import {Keyboard} from "../helper/keyboard";

const MainPage = BasePage.extend({
        defaults: {
            canvas: "canvas",
        }
    },
    {
        init() {
            this._super();
            this.canvas = this.element.querySelector(this.options.canvas);
            this.resize();
            this.game = new Game(this.canvas.getContext("2d"));
            this.blockObject = this.game.createObject("Block", {x: 10, y: 50, width: 10, height: 10});
            this.game.createObject("Fps", {x: 0, y: 30});
            this.game.start();
        },

        "{window} resize"() {
            this.resize();
        },

        "{window} keyup"(el, ev) {
            switch (ev.which) {
                case Keyboard.W:
                    this.blockObject.position.y -= 1;
                    break;
                case Keyboard.S:
                    this.blockObject.position.y += 1;
                    break;
                case Keyboard.A:
                    this.blockObject.position.x -= 1;
                    break;
                case Keyboard.D:
                    this.blockObject.position.x += 1;
                    break;
            }
        },

        resize() {
            let bound = document.body.getBoundingClientRect();
            this.canvas.width = bound.width;
            this.canvas.height = bound.height;
        },
    });

new MainPage(document.querySelector("body"));
