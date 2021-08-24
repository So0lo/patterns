class Transport {
    constructor (type, width, height) {
        this.type = type;
        this.width = width;
        this.height = height;
    }

    transport (to) {
        console.log(`You deliver goods to ${to} by ${this.type}`);
    }
}

class Logistics {
    constructTransport (type) {
        if (type == 'sea') {
            return new Transport(type, 300, 200);
        } else {
            return new Transport(type, 100, 50);
        }

    }
}

const fabricLogistics = new Logistics();

const fura = fabricLogistics.constructTransport('ground');

fura.transport(`Gomel`);

const ship = fabricLogistics.constructTransport('sea');

ship.transport(`Gomel`);
