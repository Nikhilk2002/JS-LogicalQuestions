function findSmallestAndLargestWords(str) {
    let words = str.split(' ');
    
    let smallestWord = words[0];
    let largestWord = words[0];
    
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
        if (words[i].length > largestWord.length) {
            largestWord = words[i];
        }
    }
    
    
    return {
        smallest: smallestWord,
        largest: largestWord
    };
}


let inputString = "Find the smallest and largest words in this string";
let result = findSmallestAndLargestWords(inputString);
console.log(`Smallest word: ${result.smallest}`);
console.log(`Largest word: ${result.largest}`);
