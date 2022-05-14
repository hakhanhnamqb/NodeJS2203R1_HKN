const a = 1
const b = 2

if (a === 0 && b === 0) {
    console.log('Phương trình vô số nghiệm');
}
else if (a !== 0 && b === 0) {
    console.log('Phương trình có nghiệm x = 0');
}
else if (a === 0 && b !== 0) {
    console.log("Phương trình vô nghiệm");
}
else 
    console.log('Phương trình có nghiệm x = ' + (-b / a));