class ListComponent {
  public things: Array<ListItem>;

  constructor() {
    this.things = [];
  }

  length(): number {
    return this.things.length;
  }

  add(item: ListItem, password: string): boolean {
    if (this.validate(password)) {
      this.things = [...this.things, item];
      return true;
    }
    return false;
  }

  private validate(password: string): boolean {
    return password === '12345';
  }
}

class ListItem {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
}

class CompletedListItem extends ListItem {
  completed: boolean;

  constructor(name: string) {
    super(name);
    this.completed = true;
  }
}

const PASS = '12345';

const item = new ListItem('thing to do');
const listOne = new ListComponent();
const listTwo = new ListComponent();

console.log(listOne.add(item, PASS)); // true
console.log(listOne.length()); // 1

console.log(listTwo.add(item, 'WRONG password')); // false
console.log(listTwo.length()); // 0

// console.log(listOne.validate('12345')); // Compiler error
