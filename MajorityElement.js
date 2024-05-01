function findMajorityElements(arr) {
    let candidate1, candidate2, count1 = 0, count2 = 0;

    for (let num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;
    for (let num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result = [];
    const n = arr.length;
    if (count1 > n / 3) {
        result.push(candidate1);
    }
    if (count2 > n / 3) {
        result.push(candidate2);
    }

    return result.length === 0 ? "No majority elements found" : result;
}

let array = [3, 2,2,3,1,4,3]; 
console.log("Majority elements:", findMajorityElements(array));


