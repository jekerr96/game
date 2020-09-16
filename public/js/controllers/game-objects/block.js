import GameObject from "./game-object";

class Block extends GameObject {
    render() {
        this.context.fillRect(this.position.x, this.position.y, this.params.width, this.params.height);
    }
}

export default Block;