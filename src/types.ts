/**
 * Array
 */
const divine_lovers: string[] = ['Zeus', 'Aphrodite'];

const digits: Array<number> = [143219876, 112347890];

const only_strings: string[] = [];
only_strings.push('this works');

// Can't push differing type
// only_strings.push(42);

/**
 * Boolean
 */
const lie: boolean = false;
const truth: boolean = true;

/**
 * Enum
 */
enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color[0]);

enum RomanceLanguages {
  Spanish = 1,
  French,
  Italian,
  Romanian,
  Portugese,
}

console.log(RomanceLanguages[0]);
console.log(RomanceLanguages[1]);
console.log(RomanceLanguages[2]);

/**
 * Number
 */
const pi: number = 3.14159;

/**
 * String
 */
const tree_of_knowledge: string = 'Yggdrasil';

/**
 * Tuples
 */
const date_triplet: [number, number, number] = [31, 6, 2016];

let athena: [string, number];
athena = ['Athena', 9386];

let userName: string = athena[0];
const age: number = athena[1];

// Doesn't work
// userName = athena[1];

/**
 * Void
 */
let theVoid: void = undefined;
theVoid = null;
// Doesn't work
// theVoid = 'nothing'

/**
 * Any
 */
let mystery: any = 4;
mystery = 'four';

const notOnlyStrings: Array<any> = [];
notOnlyStrings.push('this works');
notOnlyStrings.push(6);
