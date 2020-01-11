medianOfTwo(array1, array2) {
    let len1 = array1.length;
    let len2 = array2.length;
    
    if (len1 == 1) {
        return medianSingleton(array1[0], array2);
    }
    if (len2 == 1) {
        return medianSingleton(array2[0], array1);
    }


}

[1,5]
[3]

medianSingleton(num, array) {
    let len = array.length;
    if (len == 1) {
        return ((num + array[0]) / 2);
    }

    if (array[Math.floor(len/2)] > num) {
        return adjustedMedian(1, array);
    } else if (array[Math.floor(len/2) + 1] < num) {
        return adjustedMedian(-1, array);
    } else {
        
    }
}

adjustedMedian(adjustment, array) {
    return array[Math.floor((array.length + adjustment) / 2)];   
}