function binaryInsert(dataArr, target, start = 0, end = dataArr.length - 1) {
    middle = parseInt((start + end) / 2);
    console.log(middle);
    if (middle == start || middle == end) {
        return -1;
    }

    if (dataArr[middle] == target) {
        console.log("found!", dataArr[middle]);
        return middle;
    }

    if (target < dataArr[middle]) {
        return binaryInsert(dataArr, target, 0, middle - 1);
    } else {
        return binaryInsert(dataArr, target, 0, middle + 1);
    }
}