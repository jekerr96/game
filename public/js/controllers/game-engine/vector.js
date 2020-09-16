class Vector {
    x = 0;
    y = 0;

    constructor(x, y) {
        if (!x) x = 0;
        if (!y) y = 0;

        this.x = x;
        this.y = y;
    }
}

export default Vector;