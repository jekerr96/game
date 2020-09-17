import {Keyboard} from "../helper/keyboard";
import {lerp} from "../helper";
import Vector from "./vector";

class Input {
    static VERTICAL = 0;
    static HORIZONTAL = 0;
    static MOUSE_CLICK = 0;
    static MOUSE_POSITION = new Vector(0, 0);

    static PRESSED_BUTTONS = {};

    static initInputs() {
        window.addEventListener("keydown", (ev) => {
            this.PRESSED_BUTTONS[ev.code] = true;
        });

        window.addEventListener("keyup", (ev) => {
            this.PRESSED_BUTTONS[ev.code] = false;
        });

        window.addEventListener("mousemove", (ev) => {
            this.MOUSE_POSITION.updatePosition(ev.offsetX, ev.offsetY);
        });

        window.addEventListener("mousedown", (ev) => {
            this.PRESSED_BUTTONS[Keyboard.MOUSE_CLICK] = true;
        });

        window.addEventListener("mouseup", (ev) => {
            this.PRESSED_BUTTONS[Keyboard.MOUSE_CLICK] = false;
        });
    }

    static updateInputs() {
        for (let keyCode in this.PRESSED_BUTTONS) {
            if (!this.PRESSED_BUTTONS.hasOwnProperty(keyCode)) continue;

            let value = this.PRESSED_BUTTONS[keyCode];

            switch (keyCode) {
                case Keyboard.A:
                    this.HORIZONTAL = lerp(this.HORIZONTAL, value ? -1 : 0);
                    break;
                case Keyboard.D:
                    this.HORIZONTAL = lerp(this.HORIZONTAL, value ? 1 : 0);
                    break;
                case Keyboard.W:
                    this.VERTICAL = lerp(this.VERTICAL, value ? -1 : 0);
                    break;
                case Keyboard.S:
                    this.VERTICAL = lerp(this.VERTICAL, value ? 1 : 0);
                    break;
                case Keyboard.MOUSE_CLICK:
                    this.MOUSE_CLICK = value ? 1 : 0;
                    break;
            }
        }
    }
}

export default Input;