function maxSubSeqSum(arr) {
    var thisSum = 0,
        maxSum = 0;
    var i, j, k;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            thisSum = 0;

            for (k = i; k <= j; k++) {
                thisSum += A[k];
                if (thisSum > maxSum) {
                    maxSum = thisSum;
                }
            }
        }
    }
    return maxSum;
}




var max = arr[0];
var obj = {
    i: 0,
    j: 0
}
var thisMax = 0;
for (var i = 0; i < arr.length; i++) {
    thisMax = 0;
    for (j = i; j < arr.length; j++) {
        thisMax += arr[j];
        if (thisMax > max) {
            max = thisMax;
            obj.i = i;
            obj.j = j;

        }
    }
}

console.log("max sub seq sum: " + max);
console.log("序号：[i]: " + [i] + "[j]: " + [j]);


function maxSubSeqSum1(arr) {
    var max = arr[0];
    var obj = {
        i: 0,
        j: 0
    }
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        var thisMax = 0;
        for (j = i; j < arr.length; j++) {
            thisMax += arr[j];
            if (thisMax > max) {
                max = thisMax;
                obj.i = i;
                obj.j = j;

            }
            count++;
        }
    }

    console.log("max sub seq sum: " + max);
    console.log("序号：[i]: " + [i] + "[j]: " + [j]);
    console.log("循环次数: " + count);

}

var arr = [-1, -1, 3, 5, -1];
maxSubSeqSum1(arr)



// f(x) = a0 + a1x + a2x^2 + **** + anx^n;

arr = [105, 75, 45, 15, -15, -45, -75];

function sequenceSum(arr, x, n) {
    var sum = arr[0];

    for (var i = 1; i <= n; i++) {
        sum += arr[i] * Math.pow(x, i);
    }
    return sum;
}

function sequenceSum(arr, x, n) {
    var sum = arr[n];

    for (var i = n; i > 0; i--) {
        sum += arr[i] * Math.pow(x, i);
    }
    return sum;
}
console.log(sequenceSum(arr, 0, 6));