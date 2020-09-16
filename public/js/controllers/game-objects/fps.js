import GameObject from "./game-object";
import Time from "../game-engine/Time";

class Fps extends GameObject {
    delay = 500;
    currentDelay = 0;
    fps = 0;

    render() {
        if (Time.deltaTime === 0) return;

        this.currentDelay += Time.deltaTime;

        if (this.currentDelay > this.delay || this.fps === 0) {
            this.fps = Math.round(1000 / Time.deltaTime);
            this.currentDelay = 0;
        }

        this.context.font = "30px Arial";
        this.context.fillText("FPS " + this.fps, this.position.x, this.position.y);
    }
}

export default Fps;