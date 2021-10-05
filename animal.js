class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Salam kenal");
  }

  info() {
    console.log(`Namaku adalah ${this.name}`);
    console.log(`Usiaku adalah ${this.age} tahun`);
    console.log(
      `Namun usiaku adalah ${this.humanAge} tahun dalam wujud manusia`
    );
    this.greet();
  }
}

export default Animal;
