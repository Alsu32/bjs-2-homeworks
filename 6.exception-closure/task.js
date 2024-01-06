function parseCount(value) {
	let parseResult = Number.parseFloat(value);
	if (isNaN(parseResult)) {
		throw new Error("Невалидное значение");
	} 
	return parseResult;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;	
	}
}

class Triangle {
	constructor(num1, num2, num3) {
		if (num1 + num2 < num3 || num2 + num3 < num1 || num1 + num3 < num2) {
			throw new Error("Треугольник с такими сторонами не существует");
		} 
		this.num1 = num1;
		this.num2 = num2;
		this.num3 = num3;
		
	} 

	get perimeter() {
		return +(this.num1 + this.num2 +this.num3);
	}

	get area() {
		let halfPerimeter = this.perimeter / 2;
		return +Math.sqrt(halfPerimeter * (halfPerimeter - this.num1) * (halfPerimeter - this.num2) * (halfPerimeter - this.num3)).toFixed(3);
	}

}

function getTriangle(num1, num2, num3) {
	try {
		return new Triangle(num1, num2, num3);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},		
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}