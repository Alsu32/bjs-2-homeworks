class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find((t) => t.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		} 
		this.alarmCollection.push({
			callback, 
			time, 
			canCall: true
		});	
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((t) => t.time !== time);
	}

	getCurrentFormattedTime() {
		let now = new Date;
		let hh = `${now.getHours()}`;
		let mm = `${now.getMinutes()}`;
		return `${hh.length === 1 ? "0" + hh : hh}:${mm.length === 1 ? "0" + mm : mm}`;
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			let now = this.getCurrentFormattedTime();
			this.alarmCollection.forEach((t) => {
				if (t.canCall && t.time === now) {
					t.canCall = false;
					t.callback();
				}
			}, now)
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((t) => t.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}