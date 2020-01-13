medianOfTwo(array1, array2) {
    let len1 = array1.length;
    let len2 = array2.length;
    
    if (len1 == 1) {
        return medianSingleton(array1[0], array2);
    }
    if (len2 == 1) {
        return medianSingleton(array2[0], array1);
    }

    let mid1 = Math.floor(len1/2);
    let mid2 = Math.floor(len2/2);
    if (array1[mid1] <= array2[mid2]){
        return medianOfTwo(array1.slice(mid1, len1), array2.slice(mid2));
    } else {
        return medianOfTwo(array1.slice(mid1), array2.slice(mid2, len2));
    }
}

medianSingleton(num, array) {
    let len = array.length;
    let mid = Math.floor(len/2);
    if (len == 1) {
        return ((num + array[0]) / 2);
    }

    if (len % 2 == 0) {
        if (num < array[mid]) {
            if (num > array[mid - 1]) {
                return num;
            } else {
                return array[mid - 1];
            }
        } else {
            if (len > 2) {
                if (num < array[mid + 1]) {
                    return num;
                } else {
                    return array[mid + 1];
                }
            } else {
                return array[mid]
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


