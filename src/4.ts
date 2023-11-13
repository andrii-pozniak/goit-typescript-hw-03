class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}
const key = new Key();

class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
    this.key = key;
  }
  comeIn() {
    if (this.door) {
      const newPerson = new Person(this.key);
      this.tenants.push(newPerson);
    }
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {this.door === true;
    console.log("Door is open.");}   
    console.log(" Door is closed.");

  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  public getKey(): Key {
    return key;
  }
}
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn();

export {};
