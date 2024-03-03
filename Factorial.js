function factorial(target){

    if(target===0 || target===1){
        return 1
    }
    else{
        
     return target* factorial(target-1)
    }
}

console.log(factorial(5))