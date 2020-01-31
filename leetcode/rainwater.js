// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

let trap = function (height) {
    let len = height.length;
    let maximaArray = new Array[len][3];
    let maximaIndex = 0;

    let leftMaximum = -1;
    let rightMaximum = -1;
    let minimum = Infinity;
    let direction = 0; //1 is up, 0 is not up
    let waterCap = 0;
    for (let i = 0; i < len; i++) {
        if (i == len - 1 && i > 0 && height[i] > height[i - 1]) {
            // final right maxima found. add to [maximaIndex][1]
            if (leftMaximum > -1) {
                rightMaximum = height[i];
                maximaArray[maximaIndex][0] = leftMaximum;
                maximaArray[maximaIndex][1] = rightMaximum;
            }
        }

        if (i > 0 && height[i] < height[i - 1]) {
            // we're going down now
            if (direction == 1) {
                if (leftMaximum > -1) {
                    rightMaximum = i - 1;
                    maximaArray[maximaIndex][0] = leftMaximum;
                    maximaArray[maximaIndex][1] = rightMaximum;
                    maximaIndex++;

                    leftMaximum = i - 1;
                } else {
                    // this should not happen except for the first time
                    leftMaximum = i - 1;
                }
            }
            direction = 0;
        }
        if (i > 0 && height[i] > height[i - 1]) {
            // we're going up now
            if (direction == 0 && i > 0) {
                minimum = i - 1;
                maximaArray[maximaIndex - 1][2] = minimum;
            }
            direction = 1;
        }

        if (leftMaximum == -1 && height[i] > 0) {
            leftMaximum = i - 1;
            direction = 1;
        }
    }
    //return maximaArray;

    for (let i = 0; i < maximaIndex; i++) {
        let left = maximaArray[i][0];
        let right = maximaArray[i][1];
        let barrier = Math.min(left, right);
        for (let j = left + 1; j < right; j++) {
            waterCap += barrier - height[j];
        }
    }
    return waterCap;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));