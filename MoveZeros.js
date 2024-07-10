function moveZeroes(number) {
    let lastNonZero= 0
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== 0) {
            number[lastNonZero++] = number[i];
        }
    }

    for (let j = lastNonZero; j< number.length; j++) {
        number[j] = 0;
    }
}
let number = [0, 1, 22 ,0, 10,34,0,23];
moveZeroes(number);
console.log(number); 
