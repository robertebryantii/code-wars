// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b){
    let x
    let y
    let sum = 0
    if(a < b){
        x = a
        y = b
    } else{
        x = b
        y = a
    }
    for(i = x; i <= y; i++){
        sum += i
    }
    return sum
}

// console.log(getSum(-1, -1))