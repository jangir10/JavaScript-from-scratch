let num = 5;

const factorial = (n) =>{

    if(n==0 || n==1){
        return 1
    }
    else{
        return n*factorial(n-1)        
    }
}
let result = factorial(num) 
console.log(result)