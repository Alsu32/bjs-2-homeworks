class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.stateStatus = 100;
		this.type = null
	}
	fix() {
		let tempState = this.state * 1.5;
		if (tempState < 0) {
			this.state = 0;
		} else if (tempState > 100) {
			this.state = 100;
		} else {
			this.state = tempState;
		}
	}
	set state(stateStatus) {
		if (stateStatus < 0) {
			this.stateStatus = 0;
		} else if (stateStatus > 100) {
			this.stateStatus = 100;
		} else {
			this.stateStatus = stateStatus;
		}
	}
	get state() {
		return this.stateStatus;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(typeBook, value) {
		let foundBook;
		for (let book of this.books) {
			if (book[typeBook] === value) {
				foundBook = book;
			}
		}
		return foundBook ? foundBook : null;
	}

	giveBookByName(bookName) {
		let indexBook;
		let foundBook;

		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				indexBook = i;
				foundBook = this.books[i];
			}
		}

		if (foundBook) {
			this.books.splice(indexBook, 1);
			return foundBook;
		}

		return null;
	}
}

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark >= 2 && mark <= 5) {
			if (this.marks[subject]) {
				this.marks[subject].push(mark);
			} else {
				this.marks[subject] = [];
				this.marks[subject].push(mark);
			}
		}
	}

	getAverageBySubject(subject) {
		if (this.marks[subject]) {
			let sumMaks = this.marks[subject].reduce((sum, mark) => sum + mark, 0);
			return sumMaks / this.marks[subject].length;
		}

		return 0;
	}

	getAverage() {
		let namesSubjects = Object.keys(this.marks);

		if (namesSubjects.length) {
			let sumMaks = namesSubjects.reduce((sum, subject) => sum + this.getAverageBySubject(subject), 0);
			return sumMaks / namesSubjects.length;
		} else {
			return 0;
		}
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15