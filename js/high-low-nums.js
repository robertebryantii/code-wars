// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arr = numbers.split(' ').map(e => Number(e)).sort((a,b) => a - b)
    let first = String(arr[0])
    let last = String(arr[arr.length - 1])
    return `${last} ${first}`
}

// console.log(highAndLow('1 4 3 5'))
