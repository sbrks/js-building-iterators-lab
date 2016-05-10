// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

//map method creates a new array with the results of calling a provided function
//on every element in this array

function myMap(arr, callback) {
	var returnArray = [];
	for (var i=0; i < arr.length; i++) {
		returnArray.push(callback((arr[i]), i, arr));
	}
	 return returnArray;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;

/*

map takes 3 arguments - currentValue (the current element being processed in the array), index (index of the current element being processed in the array), and array (the array map was called upon).

*/