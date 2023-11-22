function getArrayParams(...arr) {
	let min = arr[0] ? arr[0] : 0;
	let max = arr[0] ? arr[0] : 0;
	let sum = arr[0] ? arr[0] : 0;
	let avg = arr[0] ? arr[0] : 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = arr.length > 0 ? Math.min(...arr) : 0;
	let max = arr.length > 0 ? Math.max(...arr) : 0;
	let differenceMinMax = max - min;

	return differenceMinMax;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return countEvenElement > 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork(arrOfArr, func) {
	let firstArr = arrOfArr[0];
	let maxWorkerResult = func(...firstArr);

	for (let i = 1; i < arrOfArr.length; i++) {
		let tempResult = func(...arrOfArr[i]);

		if (tempResult > maxWorkerResult) {
			maxWorkerResult = tempResult;
		}
	}

	return maxWorkerResult;
}