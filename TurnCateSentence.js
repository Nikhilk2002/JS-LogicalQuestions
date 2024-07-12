function truncateSentence(word, k) {
    let wordsArray = word.split(" ");
    
    let truncatedArray = wordsArray.slice(0, k);
    
    let truncatedSentence = truncatedArray.join(" ");
    
    return truncatedSentence;
}

let word = "Hello how are you Nikhil";
console.log(truncateSentence(word, 4)); 
