function* numberGenerator() {
    // generator
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenerator();
// console.log(numberGenerator());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// next() is iterator.
let gen2 = numberGenerator();

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

