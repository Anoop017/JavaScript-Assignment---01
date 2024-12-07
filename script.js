


const num = Number(prompt("Enter a Number Between 0 and 1 million"));

let sum = 0;

if (isNaN(num)) {
    alert("It is not a number")
    document.write(`It is not a number`)
} else if (num < 0 || num > 1000000) {
    alert("Invalid number")
    document.write(`Invalid Number`)
} else {
    for (let i = 0; i <= num; i++) {
        sum += i ;

    }
    console.log(sum)
    
    alert(`Sum of Number upto ${num} is ${sum} `)

    document.write (`Sum of Number upto ${num} is ${sum} `)
    
}



