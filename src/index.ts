import { runInContext } from "vm";

class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string = "dog";
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4;
  static food: string = "bones";
}

console.log(Dog.prototype);
let dog = new Dog("ww");
console.log(dog);
console.log(Dog.food);
// dog.pro()
// dog.pri()

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    // this.pri()
    this.pro();
  }
  //   color: string;
}
