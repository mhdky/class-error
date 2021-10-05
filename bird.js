import Animal from "./animal";

class Bird extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    console.log(`Namaku adalah ${this.name}`);
    console.log(`Usiaku adalah ${this.age} tahun`);
    console.log(`Namun usiaku adalah ${humanAge} tahun dalam wujud manusia`);
    const humanAge = this.getHumanAge();
    console.log(`Aku adalah binatang berjenis ${this.breed}`);
    this.greet();
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Bird;
