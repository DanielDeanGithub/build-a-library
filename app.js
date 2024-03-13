class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this._ratings.reduce((a,b) => a + b, 0);
        return ratingsSum / this._ratings.length;
    }

    addRating(rating) {
        try {
            if(isNaN(rating) || rating < 1 || rating > 5) {
                throw Error("Error: Please provide a number between 1 - 5");
            }            
            this._ratings.push(rating);
        } catch(e) {
            console.log(e);
        }
        
    }
}


class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


speed.addRating('a');
speed.addRating(0);
speed.addRating(6);
speed.addRating(3);
console.log(speed.ratings);


/*
const test = new Media('test');
console.log(test);
console.log(test.title);
console.log(test.isCheckedOut);
test.toggleCheckOutStatus();
console.log(test.isCheckedOut);
test.toggleCheckOutStatus();
console.log(test.isCheckedOut);
test.addRating(5);
test.addRating(1);
test.addRating(2);
test.addRating(3);
test.addRating(4);
test.addRating(5);
test.addRating(5);
test.addRating(5);
console.log(test.ratings);
console.log(test.getAverageRating());
*/