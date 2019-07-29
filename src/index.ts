abstract class Animal {
  eat() {
    console.log("eat");
  }
  abstract sleep(): void;
}
// let animal = new Animal()

class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  sleep() {
    console.log("dog sleep");
  }
}

let dog = new Dog("ww");
dog.eat();
// dog.sleep();

class Cat extends Animal {
  sleep() {
    console.log("cat sleep");
  }
}
let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach(i => {
  i.sleep();
});

class WorkFlow {
  step1() {
    return this;
  }

  step2() {
    return this;
  }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow()
  .next()
  .step1()
  .step2();
