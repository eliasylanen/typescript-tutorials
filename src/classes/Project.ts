import Entity from "./Entity";
import Story from "./Story";

export default class Project extends Entity {
  private _released: boolean;
  private _stories: Array<Story>;

  get released(): boolean {
    return this._released;
  }
  set released(value: boolean) {
    this._released = value;
  }

  get stories(): Array<Story> {
    return this._stories;
  }

  public addStory(story: Story) {
    this._stories = [...this.stories, story];
  }

  public removeStory(story: Story): void {
    this._stories = this.stories.filter(value => value !== story)
  }
}
