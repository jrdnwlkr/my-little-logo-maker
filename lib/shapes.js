class Shape {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" widht="100%"`
    }
}

module.exports = {Circle, Square, Triangle}