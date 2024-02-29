
function duplicate(arr) {
    const size = arr.length;

    for (let i = 0; i < size - 1; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {

                return true;
            }
        }
    }

    return false
}

console.log(duplicate([1, 2, 3, 4, 5, 6]))