let input = "Nie ma lepszej przestrogi przed ogniem jak poparzona reka.";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
	if (input[i] === 'e') {
		resultArray.push('ee');
	} else if (input[i] === 'u') {
		resultArray.push('uu');
	} else {
		for (let j = 0; j < vowels.length; j++) {
			if (input[i] === vowels[j]) {
				resultArray.push(input[i]);
			}
		}

	}
}
console.log(resultArray.join('').toLocaleUpperCase());
