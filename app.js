// Conditional Statement

const a = 0

console.log(a)

if(typeof a == 'number'){
    if(a == 0){
        console.log("Number is zero",)
    }
    else if(a % 2 == 0){
        console.log("Number is even")
    }
    else{
        console.log("Number is odd")
    }    
}
else{
    console.error("Not a number")
}