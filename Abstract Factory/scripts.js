class WaterTransport {
    constructor (type, speed, displacement) {
        this.type = type;
        this.speed = speed;
        this.displacement = displacement;
    }

    transport (to) {
        console.log(`You deliver goods to ${to} by ${this.type} with ${this.speed} sea miles`);
    }
}
 
class GroundTransport {
    constructor (type, speed, wheels) {
        this.type = type;
        this.speed = speed;
        this.wheels = wheels;
    }

    transport (to) {
        console.log(`You deliver goods to ${to} by ${this.type} with ${this.speed}/kmph`);
    }
}

function transportProducer (type) {
    return type === `water` ? getTypeWaterTransport : getTypeGroundTransport;
}

function getTypeWaterTransport (type) {
    if (type === 'sea') {
        return new WaterTransport(type, 100, 1000);
    } else if (type === 'river') {
        return new WaterTransport(type, 20, 30);
    }

}

function getTypeGroundTransport (type) {
    if (type === 'asphalt') {
        return new GroundTransport(type, 100, 6);
    } else if (type === 'sand') {
        return new GroundTransport(type, 30, 8);
    }
}

const wtFactory = transportProducer(`water`);
const grFactory = transportProducer(`ground`);
const korabl = wtFactory('sea');
korabl.transport('Gomel');
const fura = grFactory('asphalt');
fura.transport('Minsk');
