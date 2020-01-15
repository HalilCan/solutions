function medianOfTwo(array1, array2) {
    let len1 = array1.length;
    let len2 = array2.length;
    
    if (len1 == 1) {
        return medianSingleton(array1[0], array2);
    }
    if (len2 == 1) {
        return medianSingleton(array2[0], array1);
    }
    if (len1 == 2 && len2 == 2) {
        return (Math.max(array1[0], array2[0]) + Math.min(array1[1], array2[1])) / 2
    }

    let mid1 = Math.floor(len1/2);
    let mid2 = Math.floor(len2/2);
    if (medianOfOne(array1) < medianOfOne(array2)){//array1[mid1] < array2[mid2]){
        console.log(`<`);
        console.log(array1.slice(mid1, len1), array2.slice(0, mid2+1));
        return medianOfTwo(array1.slice(mid1, len1), array2.slice(0, mid2+1));
    } else if (medianOfOne(array1) > medianOfOne(array2)){//array1[mid1] > array2[mid2]){
        console.log(`>`);
        console.log(array1.slice(0, mid1+1), array2.slice(mid2, len2));
        return medianOfTwo(array1.slice(0, mid1+1), array2.slice(mid2, len2));    
        
    } else {
        return array1[mid1];
    }
}

function medianSingleton(num, array) {
    let len = array.length;
    let mid = Math.floor(len/2);
    if (len == 1) {
        return ((num + array[0]) / 2);
    }

    if (len % 2 == 0) {
        if (num < medianOfOne(array)) {
            if (num > array[mid - 1]) {
                return num;
            } else {
                return array[mid - 1];
            }
        } else {
            if (len > 2) {
                if (num < array[mid]) {
                    return num;
                } else {
                    return array[mid];
                }
            } else {
                return array[mid - 1]
            }
        }
    } else {
        if (num < array[mid]) {
            if (num > array[mid - 1]) {
                return (num + array[mid]) / 2;
            } else {
                return (array[mid-1] + array[mid]) / 2;
            }
        } else {
            if (num < array[mid + 1]) {
                return (num + array[mid]) / 2;
            } else {
                return (array[mid + 1] + array[mid]) / 2;
            }
        }
    }
}

function medianOfOne(array) {
    let len = array.length;
    let mid = Math.floor(array.length / 2);
    let ret;
    if (len % 2 == 0) {
        ret = (array[mid] + array[mid - 1]) / 2;
    } else {
        ret =  (array[mid]);
    }
    return ret;
}

let TEST_ARRS = [[1,2,3], [-5,-4,-3], [-100,101,102], [-1,22], [-5,6,12,17], [0, 10000000, 20000000], [-100000, 100000], [1]];
let TEST_COUNT = 10;

function test() {
    let len = TEST_ARRS.length;
    for (let i = 0 ; i < TEST_COUNT; i++) {
        let arr1 = TEST_ARRS[Math.floor(Math.random()*len)];
        let arr2 = TEST_ARRS[Math.floor(Math.random()*len)];
        console.log(arr1, arr2, medianOfTwo(arr1, arr2), "\n");
    }
}

//console.log(TEST_ARRS[6], TEST_ARRS[5], medianOfTwo(TEST_ARRS[6], TEST_ARRS[5]));
test();