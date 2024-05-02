function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[1];
}

const array = [5, 10, 3, 8, 15,12];
const secondLargest = findSecondLargest(array);
console.log("Second largest value:", secondLargest);
