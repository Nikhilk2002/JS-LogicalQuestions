
function checkAnagram(str1,str2){
    if(str1.length!==str2.length){
         return false;
        
    }
    const sortString1=str1.toLowerCase().split("").sort().join("");
    const sortString2=str2.toLowerCase().split("").sort().join("");

    if(sortString1===sortString2){
        return true;
    }
    else{
        return false;
    }

}

console.log(checkAnagram("manan","naman"))

console.log(checkAnagram("java","ruby"))

