function mergeArrays(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    return mergedArray;
}

console.log(mergeArrays([1,2,3,4,5],[6,7,8,9]));