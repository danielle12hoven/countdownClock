class Entity {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  greet() {
    console.log(`Hi! I'm ${this.name} from Middle Earth!`)
  }
}


let Merry = new Entity("Merry", 4.6);

Merry.greet();

export default Entity;
