interface User {
  name: string;
  email: string;
  avatar?: Object;

  print(): void;
}

class RegisteredUser implements User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  print(): void {
    console.log(`Name: ${this.name} | Email: ${this.email} | No avatar`);
  }
}

class ImageUser implements User {
  public name: string;
  public email: string;
  public avatar: Object;

  constructor(name: string, email: string, avatar: Object) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }

  print(): void {
    console.log(
      `Name: ${this.name} | Email: ${this.email} | Avatar: ${this.avatar}`
    );
  }
}

const userOne = new RegisteredUser('elias', 'elias.ylanen@gmail.com');
userOne.print();

const userTwo = new ImageUser('anna', 'annahakala@gmail.com', { src: 'test' });
userTwo.print();
