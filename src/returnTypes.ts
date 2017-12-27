const capitalizeName = (name: string): string => name.toUpperCase();

const test: string = capitalizeName('test');

// Don't work
// const test2: number = capitalizeName(4)
// const evenBroken = (num: number): boolean => num % 2;

const even = (num: number): boolean => num % 2 === 0;
