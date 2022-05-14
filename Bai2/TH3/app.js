const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];
for (const i of array) {
    if (max <i) max = i;
}
console.log(`Số lớn nhất trong mảng là ${max}`);