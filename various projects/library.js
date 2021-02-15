class Media {
	constructor(title) {
		this._titile = title;
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
		// if (this.value === true) {
		// 	value = false;
		// } else {
		// 	value = true;
		// }
		this.isCheckedOut = !this.isCheckedOut;
	}
	getAvergeRating() {
		let ratingSum = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return this.ratingSum / this.ratings.length;
	}
	addRating(value) {
		this.ratings.push(value);
	}
}

class Book extends Media {
	constructor(title, author, pages) {
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
	constructor(title, director, runTime) {
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

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAvergeRating();
console.log(historyOfEverything.getAvergeRating);

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAvergeRating();
console.log(speed.getAvergeRating)