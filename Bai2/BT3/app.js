const array = [
    {
        name: "A",
        gender:"female",
        poin: 8
    },
    {
        name: "B",
        gender:"male",
        poin: 9
    },
    {
        name: "C",
        gender:"female",
        poin: 10
    },
    {
        name: "D",
        gender:"male",
        poin: 7
    },
    {
        name: "E",
        gender:"female",
        poin: 6
    },
    {
        name: "F",
        gender:"male",
        poin: 5
    }
];
let poinMale = [], poinFemale = [];
for (const i of array) {
    if (i.gender === "male") 
    {poinMale.push(i.poin)
    }
    else poinFemale.push(i.poin)
};
//const average = poinFemale.reduce((a,b)=>a+b);
console.log(`Diem trung binh hoc sinh nam la `+ (poinFemale.reduce((a,b)=>a+b)/poinFemale.length)+ 
` & hoc sinh nu la `+ (poinMale.reduce((a,b)=>a+b)/poinMale.length));