class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature() {
    return this.signature;
  }
}
const key = new Key();

class House {
  private door: boolean;
  private key: Key;
  private tenants: object[] = [];

  constructor(key: Key){
    this.key = key;
  }
  comeIn() {
    if (this.door === true) {
      this.tenants.push(this.key);
    }
  };
  public OpenDoor(key: Key){
    return key.getSignature();
  }
}



class Person extends Key {
  private key: Key;
  constructor(key: Key) {
    super();
    this.key = key;
  }
  public getKey(): Key {
    return this;
  }
}
const person = new Person(key);
const house = new House(key);

house.OpenDoor(person.getKey());

house.comeIn();

export {};
