const somethingAndNothing = [99, 100];
somethingAndNothing.push(101);
// undefined and null are subtypes of every primitive type, thus allowing this
somethingAndNothing.push(null);
somethingAndNothing.push(undefined);

const namesAndNumbers = ['Adonis', 'Aphrodite', 12];
// Can't add boolean to Array<string | number>
namesAndNumbers.push(true);
