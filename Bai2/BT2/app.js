const licensePlate = ['30A-00111', '43B-66666', '29A-66666'];
const checkLicense = (license) => {
    const hanoi = ['29', '30', '31', '32', '33', '40'];
    for (const i of hanoi) {
        if (license.startsWith(i))
            return true;
    };
    return false;
};
const licenseHanoi = [];
for (const i of licensePlate) {
    if (checkLicense(i)===true)
    licenseHanoi.push(i);
}
console.log(licenseHanoi)