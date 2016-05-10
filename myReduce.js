// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	var newReduce = [];
	for (var i=0; i < arr.length; i++) {
		newReduce.push(callback(arr[0], arr[1], i, arr), arr, i);
	}

	var newNewReduce = newReduce.toString();

	return newNewReduce;
//  CODE INSIDE HERE   //

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;


// arr.reduce(callback[, initialValue])
// callback takes four arguments: previousValue, currentValue (current element being processed in the array), currentIndex (the index of the current element being processed in the array), and array that the array reduce was called upon)