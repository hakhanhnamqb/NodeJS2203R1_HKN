const myClass = [
    {
        name: 'An Nguyễn',
        score: 9
    },
    {
        name: 'Lê Phan',
        score: 7
    },
    {
        name: "Bình Đỗ",
        score: 10
    },
    {
        name: "Anh Phạm",
        score: 8
    }
];
const sum = myClass.reduce((previousScore, currentStudent) => {
    return currentStudent.score + previousScore
}, 0);
const average = sum / myClass.length;
console.log(`Điểm trung bình của các học sinh trong lớp là: ${average}`);