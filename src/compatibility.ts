namespace compatibility {
  class Book {
    constructor(
      public title: string,
      public length: number,
      public author: string
    ) {}
  }

  class Article {
    constructor(
      public title: string,
      public length: number,
      public author: string
    ) {}
  }

  let x: Book;
  x = new Article('From JavaScript to TypeScript III', 6, 'Peleke');
}

namespace privateMembers {
  // Identical shapes and member names, but incompatible due to private members.
  class User {
    constructor(private name: string, private age: number) {}
  }

  class Country {
    constructor(private name: string, private age: number) {}
  }

  let rando: User;
  rando = new Country('Azerbaijan', 15); // Error
}

namespace staticMembers {
  class User {
    static users: User[];

    static addUser(user: User): void {
      if (user) User.users.push(user);
    }

    constructor(public name: string, public age: number) {}
  }

  class Country {
    static COUNTRIES: number = 197;

    static getCountryCount(): string {
      return `There are ${197} countries.`;
    }

    constructor(public name: string, public age: number) {}
  }

  // These classes have completely different static properties and methods,
  //   but their instances have the same shape, so they're compatible.
  let rando: User;
  rando = new Country('Azerbaijan', 15); // Works fine
}

namespace interfaces {
  interface Printable {
    print(): void;
  }

  class Book {
    constructor(
      public title: string,
      public length: number, // Printable pages
      public author: string,
      public text: string
    ) {}

    print(): void {
      console.log(this.text);
    }
  }

  let printable: Printable;
  printable = new Book(
    'Eugene Onegin',
    132,
    'Alexander Pushkin',
    'Not planning fun . . . '
  );

  const book: Book = new Book(
    '1984',
    222,
    'Orwell',
    'Perhaps one did not want to be loved so much as understood.'
  );

  const newPrintable = book as Printable;
}

namespace functions {
  const buildName = (firstName: string, lastName: string): string =>
    `${firstName} ${lastName}`;

  const fetchData = (url: string): string => `Fake data from ${url}`;

  let build = buildName;
  let fetch = fetchData;

  // Compatible, because fetchData's parameter list is a subset of buildName's.
  build = fetchData;

  /**
   * The types of these functions don't intersect at all,
   * so TypeScript assigns the array the union type
   * ((bar : string) => void) | ((answer : number) => string).
   */
  const function_array = [
    // ((bar : string) => void)
    function foo(bar: string): void {
      console.log(bar);
    },
    // ((answer : number) => string)
    function baz(answer: number): string {
      return `The answer to life is ${answer}.`;
    },
  ];
}
