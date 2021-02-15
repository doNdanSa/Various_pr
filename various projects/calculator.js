function getSleepHours (day) {
	switch (day) {
		case 'monday':
			return 8;
			break;
		case 'tuesday':
			return 7;
			break;
		case 'wednesday':
			return 8;
			break;
		case 'thursday':
			return 6;
			break;
		case 'friday':
			return 7;
			break;
		case 'saturday':
			return 9;
			break;
		case 'sunday':
			return 9;
			break;
	}
}
function getActualSleepHours (){
	return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
}
function getIdealSleepHours() {
	let idealHours=8;
	return idealHours *7;
}
//console.log(getActualSleepHours(),getIdealSleepHours())
function calculateSleepDebt () {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();
	if (actualSleepHours === idealSleepHours) {
		console.log('user got the perfect amount of sleep.');
	} else if (actualSleepHours > idealSleepHours) {
		console.log(`user got more sleep than needed. U slept ${actualSleepHours - idealSleepHours} hours more.`);
	} else {
		console.log(`user should get some rest. U slept ${idealSleepHours - actualSleepHours} hours less.`);
	}
}
console.log(calculateSleepDebt())