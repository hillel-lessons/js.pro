function counter(start = 0, interval = 1) {
    let counter = start;

    return () => counter += interval;
}

c1 = counter();

console.log(c1());
console.log(c1(null, undefined));
console.log(c1(null, undefined));
console.log(c1(null, undefined));