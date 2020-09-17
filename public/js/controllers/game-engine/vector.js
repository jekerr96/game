class Vector {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.updatePosition(x, y);
    }

    updatePosition(x, y) {
        if (!x) x = 0;
        if (!y) y = 0;

        this.x = x;
        this.y = y;
    }

    setPositionByVector(newVector) {
        this.x = newVector.x;
        this.y = newVector.y;
    }
}

export default Vector;