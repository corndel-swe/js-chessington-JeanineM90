export class Rectangle {
  #width
  #height

  constructor(width, height) {
    this.#width = width
    this.#height = height
  }

  area() {
    return this.#width * this.#height
  }

  perimeter() {
    return 2 * (this.#width + this.#height)
  }

  width() {
    return this.#width
  }

  height() {
    return this.#height
  }
}

export class Square extends Rectangle {
  #side

  constructor(side) {
    super(width)
    super(height)
    this.#side = side
  }


  area() {
    return this.#side * this.#side
  }

  perimeter() {
    return 4 * this.#side
  }

  width() {
    return this.#side
  }

  height() {
    return this.#side
  }
}

/* Exercise 2: Inheritance:
Since a `Square` is a special type of `Rectangle`, let's make `Square` _inherit
from_ `Rectangle`.

- Use the `extends` keyword in the class definition to make `Square` a
      subclass of `Rectangle`

- We also need to call `super` in the constructor of `Square` to call the
      constructor of `Rectangle` and set the `width` and `height` properties.

- Are there any functions we can remove from `Square` that are already
      defined in `Rectangle`?

- Do we need `#side` anymore if we're using `#width` and `#height`?

--

Tech Docs: To inherit from a parent class, we use the extends keyword, and then call the super() method in the child class's constructor
Super() is part of the constructor 

--

After adding extends:

    1) should have an area method
    2) should have a perimeter method
    ✔ should be a subclass of Rectangle
*/