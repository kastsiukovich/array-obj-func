

//hw 3-1
function sumFive(arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > 5) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));

//hw 3-2
function objectToArray(obj) {
    var arr = [];
    for (var key in obj) {
        var subArr = [];
        subArr.push(key);
        subArr.push(obj[key])
        arr.push(subArr);
    }
    return arr;
}
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
}));
console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}));

//hw 3-3
function numberSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            sum += arr[i];
        }

    }
    return sum;
}
console.log(numberSum([1, 2, "13", "4", "645"]));
console.log(numberSum([true, false, "123", "75"]));
console.log(numberSum([1, 2, 3, 4, 5, true]));

// hw 3-4
function keysAndValues(obj) {

    var arr1 = [];
    for (var key in obj) {
        arr1.push(key);
    }
    var arr2 = []
    for (var key in obj) {
        arr2.push(obj[key])
    }
    var arr = []
    arr.push(arr1)
    arr.push(arr2)
    return arr;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));