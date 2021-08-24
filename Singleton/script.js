

class Counter {
    constructor (counter) {
        if (Counter.instance) {
            return Counter.instance;
        }

        this.counter = counter;
        Counter.instance = this;
    }

    inc () {
        this.counter++;
    }

    dec () {
        this.counter--;
    }
}

const ct = new Counter (1);

ct.dec();
ct.inc();
ct.inc();

console.dir(ct);
