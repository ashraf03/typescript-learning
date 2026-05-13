// static
class Counter {
    static count: number = 0;

    static increment() {
        return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return Counter.count = Counter.count;
    }
}

// const instance1 = new Counter(); //ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter(); //r ekta different
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); //2

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());