const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  describe("Circle test", () => {
    test("test for a circle with a red background", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />`
      );
    });
  });

  describe("Square test", () => {
    test("test for a square with a yellow background", () => {
      const shape = new Square();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        `<rect x="50" height="200" width="200" fill="yellow" />`
      );
    });
  });