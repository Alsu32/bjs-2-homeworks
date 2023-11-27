function Student(name, gender, age) {
  this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (Object.getOwnPropertyDescriptor(this, "marks")) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function () {
  if (Object.getOwnPropertyDescriptor(this, "marks") && this.marks.length) {
		let acc = 0;
		for (mark of this.marks) {
			acc += mark;
		}
		return acc / this.marks.length;
	}

	return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
	delete this.subject;
	this.excluded = reason;
}
