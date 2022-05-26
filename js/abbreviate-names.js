// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let nameArr = name.split(' ');
    return (nameArr[0][0] + '.' + nameArr[1][0]).toUpperCase();
}

// console.log(abbrevName('John smith'))



// Lazy Answer

// function abbrevName(name){

//     let nameArr = name.split(' ')
//     let firstName = nameArr[0].split('')
//     let firstChar = firstName[0].toUpperCase()
//     let lastName = nameArr[1].split('')
//     let lastChar = lastName[0].toUpperCase()
//     return `${firstChar}.${lastChar}`
   
// }