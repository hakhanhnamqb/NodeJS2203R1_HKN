const employ = {
    name: 'Bình Nguyễn',
    c: 50000,
    timesheets: [
        {
            date: '1/12/2021',
            hours: 5
        },
        {
            date: '2/12/2021',
            hours: 8
        },
        {
            date: '3/12/2021',
            hours: 8
        },
        {
            date: '4/12/2021',
            hours: 5
        },
        {
            date: '6/12/2021',
            hours: 8
        },
        {
            date: '7/12/2021',
            hours: 4
        },
        {
            date: '8/12/2021',
            hours: 4
        }
    ]
}
const totalHours = employ.timesheets.reduce((a,b)=>{return a+b.hours},0);
console.log(`Nhan vien ${employ.name} dat muc luong ${totalHours*employ.c}`);