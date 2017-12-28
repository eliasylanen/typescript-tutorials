class User {
  constructor(private _name: string, private _email: string) {}

  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }

  speak(): void {
    console.log(`I am ${this.name}`);
  }
}

const Elias = new User('Elias', 'elias.ylanen@gmail.com');
console.log(Elias.name);

Elias.speak();

console.log(Elias.hasOwnProperty('speak')); // false; delegates to prototype
console.log(Elias.hasOwnProperty('_name')); // true

User.prototype.speak = null;

try {
  Elias.speak();
} catch (err) {
  console.log(err); // throws TypeError
}
