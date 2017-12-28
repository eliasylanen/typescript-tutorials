import Entity from "./Entity";
import Task from "./Task";
import Completable from "../interfaces/completable";

export default class Story extends Entity implements Completable {
  private _completed: boolean;
  private _responsible: string;
  private _tasks: Array<Task> = [];

  get completed(): boolean {
    return this._completed;
  }
  set completed(value: boolean) {
    this._completed = value;
  }

  get responsible(): string {
    return this._responsible;
  }
  set responsible(value: string) {
    this._responsible = value;
  }

  get tasks(): Array<Task> {
    return this._tasks;
  }

  public addTask(task: Task) {
    this._tasks = [...this.tasks, task];
  }

  public removeTask(task: Task): void {
    this._tasks = this.tasks.filter(value => value !== task)
  }
}

// const test1 = new Task(1, 'test1');
// const test2 = new Task(2, 'test2');
// const test3 = new Task(3, 'test3');
// const test4 = new Task(4, 'test4');

// const story = new Story(4, 'test story');

// story.addTask(test1);
// story.addTask(test2);
// story.addTask(test3);
// console.log(story.tasks);

// story.removeTask(test4)
// console.log(story.tasks);
