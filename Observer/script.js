const person = {
    name: `Oleg`,
    seeVideo (about) {
        console.log(`${this.name} watches video about ${about}`)
    }
};

const person2 = {
    name: `Valera`,
    seeVideo (about) {
        console.log(`${this.name} watches video about ${about}`)
    }
};

class YoutubeChannel {
    constructor (channelName) {
        this.channelName = channelName;
        this.subscribers = [];
    }

    subscribe (subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubcsribe (subscriber) {
        this.subscribers = this.subscribers.filter((curSub) => curSub !== subscriber);
    }

    broadcast (videoName) {
        this.subscribers.forEach((sub) => sub(videoName));
    }

    makeVideo (videoName) {
        this.latestVideo = videoName;
        this.broadcast(videoName);
    }
}

const dud = new YoutubeChannel(`dud`);

const ValeraSee = person.seeVideo.bind(person2);

dud.subscribe(person.seeVideo.bind(person));
dud.subscribe(ValeraSee);

dud.makeVideo(`chuvak int`);
dud.makeVideo(`muzhik int`);

dud.unsubcsribe(ValeraSee);

dud.makeVideo(`parenek int`);
