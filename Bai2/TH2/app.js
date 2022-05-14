const number = 3;
let isPrimeNumber = true;
if (number < 2) {
    isPrimeNumber = false;
}
else {
    for (let i= 2; i < number - 1; i++) {
        if (number % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }
}
if (isPrimeNumber === true){
    console.log(number + " là số nguyên tố");
}
else{
    console.log(number + " không phải là số nguyên tố");
}