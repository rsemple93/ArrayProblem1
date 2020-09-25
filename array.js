/* Writing a JavaScript function that returns the 
first n elements of an array. */

function firstElements(array, n) {
	let result = []
	if(n === undefined) return array[0];
	for(let i = 0; i < n; i++) {
		result.push(array[i]);
	}
	return result;
}

console.log(firstElements([7, 4, 5, 6, 8, 11], 3));