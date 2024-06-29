var createCounter=function(n){
    let count=1
    return function(){
        if(count === 1){
            count++
            return n
        }
        else{
            n=n+1
            return n
        }

    }
}


const counter=createCounter(10)

console.log(counter());
console.log(counter());
console.log(counter());