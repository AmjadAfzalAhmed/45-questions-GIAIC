let nameWithWhitespace: string = `\t\n Amjad Afzal \t\n`;

console.log(`Name with whitespace:
${nameWithWhitespace}`);

let nameStripped: string = nameWithWhitespace.trim();

console.log(`Name after stripping whitespace:
${nameStripped}`);