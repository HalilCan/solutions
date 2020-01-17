//it's pretty straightforward.
//since it's topical, let's do it recursive.

//map-reduce-filter from scratch

function map(start, fun, acc=[]) {
    let elem = start.shift();
    // .shift() changes 'start' in place
	if (elem == undefined) {
        // if no more elements are left, .shift() returns 'undefined'
		return acc;
	}

	elem = fun(elem);
    acc.push(elem);
    
    return map(start, fun, acc);
}

let someNums = [2,100,-10,8,3,5,99,27];
let sqrtNums = map(someNums, (val)=>{return Math.sqrt(val);});
console.log('square root of all nums in array: ', sqrtNums);


function reduce(start, fun, currentVal=undefined) {
    let elem = start.shift();
	if (elem == undefined) {
		return currentVal;
	}

    if (currentVal == undefined) {
        // since reduce is comparative, we step into the next recursion for a comparison
        return reduce(start, fun, elem);
    }

    elem = fun(elem, currentVal);
    currentVal = elem;
    
    return reduce(start, fun, currentVal);
}

let someNums2 = [2,100,-10,8,3,5,99,27];
let MaxNum = reduce(someNums2, (a,b)=>{return a < b ? a : b;});
console.log('\nmaximum value in array: ', MaxNum);


function filter(start, fun, acc=[]) {
    let elem = start.shift();
	if (elem == undefined) {
		return acc;
	}

	if (fun(elem)) {
        acc.push(elem);
    }
    
    return filter(start, fun, acc);
}

let someNums3 = [2,100,-10,8,3,5,99,27];
let squares = filter(someNums3, (val)=>{return Math.sqrt(val) % 1 == 0;});
console.log('\nsquares: ', squares);
