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

  constructor(protected key: Key) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open.");
    }
    console.log(" Door is closed.");
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
