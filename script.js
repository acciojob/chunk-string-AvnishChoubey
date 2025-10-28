function stringChop(str, size) {
  // your code here
	if(str === null) return [];
	size = parseInt(size);
	let arr = [];
	let i = 0;
	while(i < str.length) {
		arr.push(str.slice(i, i + size));
		i += size;
	}
	console.log(arr);
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.")
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
