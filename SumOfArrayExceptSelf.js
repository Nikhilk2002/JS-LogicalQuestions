function sumOfArrayExceptItself(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
            }
        }
        result.push(sum);
    }
    return result;
}


const arr = [1, 2, 3, 4, 5];
const result = sumOfArrayExceptItself(arr);
console.log(result); 
