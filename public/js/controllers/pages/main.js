import {BasePage} from "./base";
import Game from "../game-engine/game";
import Input from "../game-engine/input";
import Time from "../game-engine/Time";

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
            this.blockObject = this.game.createObject("Block", {x: 300, y: 250, width: 10, height: 10});
            this.blockObject2 = this.game.createObject("Block", {x: 300, y: 250, width: 25, height: 25});
            this.blockObject3 = this.game.createObject("Block", {x: 300, y: 250, width: 25, height: 25});
            this.game.createObject("Fps", {x: 0, y: 30});
            this.game.start();

            this.speed = 0.2;
            this.blockObject.setUpdateCallback(() => {
                this.blockObject.position.setPositionByVector(Input.MOUSE_POSITION);
                this.blockObject.position.y += this.speed * Input.MOUSE_CLICK * Time.deltaTime;
            });

            this.blockObject2.setUpdateCallback(() => {
                this.blockObject2.position.x += this.speed * Input.HORIZONTAL * Time.deltaTime;
                this.blockObject2.position.y += this.speed * Input.VERTICAL * Time.deltaTime;
            });

            this.blockObject3.setUpdateCallback(() => {
                this.blockObject3.position.x -= this.speed * Input.HORIZONTAL * Time.deltaTime;
                this.blockObject3.position.y -= this.speed * Input.VERTICAL * Time.deltaTime;
            });
        },

        "{window} resize"() {
            this.resize();
        },

        // "{window} keyup"(el, ev) {
        //     switch (ev.which) {
        //         case Keyboard.W:
        //             this.blockObject.position.y -= 1;
        //             break;
        //         case Keyboard.S:
        //             this.blockObject.position.y += 1;
        //             break;
        //         case Keyboard.A:
        //             this.blockObject.position.x -= 1;
        //             break;
        //         case Keyboard.D:
        //             this.blockObject.position.x += 1;
        //             break;
        //     }
        // },

        resize() {
            let bound = document.body.getBoundingClientRect();
            this.canvas.width = bound.width;
            this.canvas.height = bound.height;
        },
    });

new MainPage(document.querySelector("body"));
