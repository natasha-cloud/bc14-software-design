export class Display {
    on() {
        console.log("Display is on");
    }

    off(): void {
        console.log("Display is off");
    }
}

export class DVD {
    play(movie: string) {
        console.log(`Playing movie: ${movie}`);
    }

    pause(movie: string) {
        console.log(`Pausing movie: ${movie}`);
    }

    stop(movie: string) {
        console.log(`Stopped movie: ${movie}`);
    }
}

export class Speakers {
    up(volume: string) {
        console.log(`Speaker is on volume: ${volume}`);
    }

    down(volume: string) {
        console.log(`Speaker is off volume: ${volume}`);
    }
}

export default class ComputerFacade {
    private display: Display;
    private dvd: DVD;
    private speakers: Speakers;

    constructor(display: Display, dvd: DVD, speakers: Speakers) {
        this.display = display;
        this.dvd = dvd;
        this.speakers = speakers;
    }

    watchMovie(movie: string) {
        console.log("Get ready to watch a movie...");
        this.display.on();
        this.dvd.play(movie);
        this.speakers.up("10");
    }

    pauseMovie(movie: string) {
        console.log("Movie paused...");
        this.display.on();
        this.dvd.pause(movie);
        this.speakers.down("0");
    }

    endMovie(movie: string) {
        console.log("Shutting down the home theater...");
        this.dvd.stop(movie);
        this.speakers.down("0");
        this.display.off();
    }
}



let display1 = new Display();
let dvdPlayer1 = new DVD();
let speaker1 = new Speakers();
let computer = new ComputerFacade(display1, dvdPlayer1, speaker1);

computer.watchMovie("The Chronicles of the Ground Breakers");
computer.endMovie("The Chronicles of the Ground Breakers");
