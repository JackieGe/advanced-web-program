function insertedSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        var target = arr[i];
        while (j > 0 && target < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = target;
    }
}

function quickSort(arr, left, right) {
    var i = left,
        j = right,
        p = left,
        temp = arr[p];
    while (i <= j) {
        while (p <= j && temp <= arr[j]) {
            j--;
        }
        if (p <= j) {
            arr[p] = arr[j]
            p = j;
        }

        while (i <= p && arr[i] <= temp) {
            i++;
        }
        if (i <= p) {
            arr[p] = arr[i];
            p = i;
        }
    }
    arr[p] = temp;

    if (p - left > 1) {
        quickSort(arr, left, p - 1);
    }
    if (right - p > 1) {
        quickSort(arr, p + 1, right)
    }
}

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {

        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
}

function selectSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var k = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[k] > arr[j]) {
                k = j;
            }
        }

        if (k != i) {
            var tmp = arr[i];
            arr[i] = arr[k];
            arr[k] = tmp;
        }
    }
}

function getArray(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(~~( Math.random() * n * 10) + 1);
    }
    return arr;
}

// var arr = [3, 1, 4, 7, 6]
var arr = getArray(10);
insertedSort(arr)
console.log(arr)

// var arr2 = [4, 3, 7, 1, 9, 0]
var arr2 = getArray(15);
quickSort(arr2, 0, arr2.length - 1)
console.log(arr2)

// var arr3 = [4, 3, 7, 1, 9, 0]
var arr3 = getArray(20)
selectSort(arr3)
console.log(arr3)

var arr4 = getArray(20)
bubbleSort(arr4)
console.log(arr4)