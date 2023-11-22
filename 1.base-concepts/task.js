"use strict"
function solveEquation(a, b, c) {
  let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
  
	if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
  let percentAmount = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
	let paymentTotal = s + percentAmount;
	
	return +paymentTotal.toFixed(2);
}



