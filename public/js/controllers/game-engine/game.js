import Block from "../game-objects/block";
import Fps from "../game-objects/fps";
import Time from "../game-engine/Time";
import Input from "./input";

class Game {
    classes = {};
    idx = 0;
    gameObjects = {};
    collidingObjects = {};
    context = null;

    constructor(canvasContext) {
        this.context = canvasContext;
        this.classes = {
            Block: Block,
            Fps: Fps,
        };

        Input.initInputs();
    }

    start(time = 0) {
        this.context.clear();
        Input.updateInputs();

        for (let objectId in this.gameObjects) {
            this.gameObjects[objectId].render();
            this.gameObjects[objectId].update();
        }

        Time.deltaTime = time - Time.lastAnimationFrameTime;
        Time.lastAnimationFrameTime = time;

        requestAnimationFrame(this.start.bind(this));
    }

    createObject(objectName, params) {
        let object = this.classes[objectName];

        if (!object) return false;

        let objectInstance = new object(params);
        objectInstance.id = ++this.idx;
        objectInstance.context = this.context;
        objectInstance.game = this;

        if (objectInstance.isColliding()) {
            this.addToColliding(objectInstance);
        }

        this.gameObjects[objectInstance.getId()] = objectInstance;

        objectInstance.onStart();

        return objectInstance;
    }

    addToColliding(object) {
        this.collidingObjects[object.getId()] = object;
    }

    removeFromColliding(objectId) {
        delete this.collidingObjects[objectId];
    }

    destroyObject(objectId) {
        let object = this.gameObjects[objectId];

        if (!object) return;

        object.beforeDestroy();
    }
}

export default Game;