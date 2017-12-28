import log from "../log";

export default class Entity {
  constructor(
    private _id: number,
    private _title: string,
    private _creationDate: Date = new Date()
  ) {}

  get id(): number {
    return this._id;
  }

  @log()
  get title(): string {
    Entity.wait(1572);
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  private static wait(ms) {
    let start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
  }
}
