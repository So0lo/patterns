class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    walk (to) {
        console.log(`${this.name} walks to ${to}`);
    }

    sleep (hours) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}

class HumanProxy {
    constructor (human) {
        this.human = human;
    }

    walk (to) {
        if (to === 'bar') {
            console.log(`he does not go anywhere`)
        } else {
            this.human.walk(to);
        }
    }
    sleep (hours) {}
}

const proxiedHuman = new HumanProxy(new Person(`Oleg`, 23));
const human = new Person(`Valera`, 41);

proxiedHuman.walk('bar');
human.walk('bar');
