class Printable {
  text: string;

  print(): void {
    console.log(this.text);
  }
}

class Identifiable {
  name: string;
  id: number;

  identify(): void {
    console.log(`My name is ${name} and my ID is ${this.id}`);
  }
}

class Book implements Printable, Identifiable {
  constructor(public name: string, public id: number, public text: string) {}

  print(): void {}
  identify(): void {}
}

const badNovel = new Book('a buncha nonsense', 1521, 'this sucks');
badNovel.print();

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

applyMixins(Book, [Printable, Identifiable]);
