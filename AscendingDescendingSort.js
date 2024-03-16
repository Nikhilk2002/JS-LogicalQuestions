function customSort(arr) {
    
    arr.sort((a, b) => a - b);
    
    const midpoint = Math.ceil(arr.length / 2);
    
    const firstHalf = arr.slice(0, midpoint);
    const secondHalf = arr.slice(midpoint);
  
    secondHalf.reverse();
    
    
    const sortedArray=[...firstHalf,...secondHalf]

    return sortedArray;
}

const array = [45, 67, 90, 34, 87, 10];
const sortedArray = customSort(array);
console.log(sortedArray);

