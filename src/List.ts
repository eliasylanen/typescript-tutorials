class ListComponent {
  things: Array<ListItem>;

  constructor() {
    this.things = [];
  }
}

class ListItem {
  name: string;

  constructor(name) {
    this.name = name;
  }
}

const item = new ListItem('thing to do');
console.log(item);
