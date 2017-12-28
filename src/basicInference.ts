function buildName(firstName: string, lastName: string, title: string): string {
  return !!title
    ? `${title} ${firstName} ${lastName}`
    : `${firstName} ${lastName}`;
}

// Type is inferred, no annotations needed
const firstName = 1337;
const lastName = 'Hax0r';
const title = 'Dr';

console.log(buildName(firstName, lastName, title));

function queryUrl(url: string): any {
  let result;
  return result;
}

let urlVariable = 42;
queryUrl(urlVariable);

let urlVariable = { url: '//google.com' };
queryUrl(urlVariable);

let urlVariable = false;
queryUrl(urlVariable);

let urlVariable = 'test';
queryUrl(urlVariable);
