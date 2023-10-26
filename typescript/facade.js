"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speakers = exports.DVD = exports.Display = void 0;
var Display = /** @class */ (function () {
    function Display() {
    }
    Display.prototype.on = function () {
        console.log("Display is on");
    };
    Display.prototype.off = function () {
        console.log("Display is off");
    };
    return Display;
}());
exports.Display = Display;
var DVD = /** @class */ (function () {
    function DVD() {
    }
    DVD.prototype.play = function (movie) {
        console.log("Playing movie: ".concat(movie));
    };
    DVD.prototype.pause = function (movie) {
        console.log("Pausing movie: ".concat(movie));
    };
    DVD.prototype.stop = function (movie) {
        console.log("Stopped movie: ".concat(movie));
    };
    return DVD;
}());
exports.DVD = DVD;
var Speakers = /** @class */ (function () {
    function Speakers() {
    }
    Speakers.prototype.up = function (volume) {
        console.log("Speaker is on volume: ".concat(volume));
    };
    Speakers.prototype.down = function (volume) {
        console.log("Speaker is off volume: ".concat(volume));
    };
    return Speakers;
}());
exports.Speakers = Speakers;
var ComputerFacade = /** @class */ (function () {
    function ComputerFacade(display, dvd, speakers) {
        this.display = display;
        this.dvd = dvd;
        this.speakers = speakers;
    }
    ComputerFacade.prototype.watchMovie = function (movie) {
        console.log("Get ready to watch a movie...");
        this.display.on();
        this.dvd.play(movie);
        this.speakers.up("10");
    };
    ComputerFacade.prototype.pauseMovie = function (movie) {
        console.log("Movie paused...");
        this.display.on();
        this.dvd.pause(movie);
        this.speakers.down("0");
    };
    ComputerFacade.prototype.endMovie = function (movie) {
        console.log("Shutting down the home theater...");
        this.dvd.stop(movie);
        this.speakers.down("0");
        this.display.off();
    };
    return ComputerFacade;
}());
exports.default = ComputerFacade;
var display1 = new Display();
var dvdPlayer1 = new DVD();
var speaker1 = new Speakers();
var computer = new ComputerFacade(display1, dvdPlayer1, speaker1);
computer.watchMovie("The Chronicles of the Ground Breakers");
computer.endMovie("The Chronicles of the Ground Breakers");
