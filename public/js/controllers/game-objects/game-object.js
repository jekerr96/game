import Vector from "../game-engine/vector";
import Time from "../game-engine/Time";

class GameObject {
    canColliding = false;
    params = {};
    id = 0;
    context = null;
    position = null;
    game = null;
    updateCallback = null;

    constructor(params) {
        this.params = params;
        this.position = new Vector(params.x, params.y);

        if (params.updateCallback && typeof params.updateCallback === "function") {
            this.setUpdateCallback(params.updateCallback);
        }
    }

    isColliding() {
        return this.canColliding;
    }

    toggleColliding(state) {
        state = !!state;

        if (state) {
            this.game.addToColliding(this);
        } else {
            this.game.removeFromColliding(this.getId());
        }
    }

    getId() {
        return this.id;
    }

    onStart() {

    }

    update() {
        if (typeof this.updateCallback !== "function") return;

        this.updateCallback();
    }

    setUpdateCallback(callback) {
        this.updateCallback = callback;
    }

    render() {

    }

    getPosition() {
        return this.position;
    }

    beforeDestroy() {

    }
}

export default GameObject;