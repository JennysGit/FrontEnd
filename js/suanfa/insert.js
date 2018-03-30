// 需求中在排序中的通讯录中加入人
// 可以利用二分查找插入用户。
function binaryInsert(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var middle = parseInt((start + end) / 2);
        console.log("middle", middle, "middle value", arr[middle]);
        if (target >= arr[middle]) {
            if (typeof arr[middle + 1] == 'undefined') {
                arr.push(target);
                return arr;
            } else if (target <= arr[middle + 1]) {
                arr.splice(middle + 1, 0, target);
                return arr;
            }
            start = middle + 1;
        } else {
            if (typeof arr[middle - 1] == 'undefined') {
                arr.unshift(target);
                return arr;
            } else if (target >= arr[middle - 1]) {
                arr.splice(middle, 0, target);
                return arr;
            }
            end = middle - 1;
        }
    }
    return -1;
}
 
arr = [];

for (var i = 1; i <= 100; i++) {
    arr.push(i);
}