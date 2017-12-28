import Completable from "./interfaces/completable";
import Task from "./classes/Task";

function sendCompletionEmail(completable: Completable): void {
  if (!completable.completed) {
    return console.error(`Please, complete '${completable.title}' before sending email.`);
  }
  return console.log(`Sending email about '${completable.title}'`);
}

const bugfix = new Task(1, 'Weirdo flying bug');
sendCompletionEmail(bugfix);
bugfix.completed = true;
sendCompletionEmail(bugfix)
