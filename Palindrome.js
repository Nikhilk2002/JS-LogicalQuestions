
function checkPalindrome(string){
    
    reverseString=string.toLowerCase().split("").reverse().join('')
    if(reverseString===string){
        console.log("palindrome")
    }
    else{
        console.log("Not a palindrome")
    }

}
checkPalindrome("malayalam")