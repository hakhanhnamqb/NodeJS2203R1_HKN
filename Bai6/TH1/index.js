const mongoose = require('mongoose');
const studentModel = require("./schema/student.schema");
const classModel = require("./schema/class.schema");
const db = mongoose.connection;
const db_url = "mongodb://MAIN:MAIN@127.0.0.1:27017/codegym";
mongoose.connect(db_url, { useNewUrlParser: true }).then(() => { 
    console.log("Connected")
});
db.on("error", (err) => {
    console.log('Db connect errr', err.message);
});

const createClass = async ()=>{
    const class1 = await classModel.create({
        name: "Lop 1",
        address: "Ha Noi"
    });
}
//createClass();
//ObjectId("62726ee8fa5dcbae11ae2369")
const createStudent = async ()=>{
    const student = await studentModel.create({
        name: "nguyen van A",
        age: 20,
        class: "62726ee8fa5dcbae11ae2369"
    });
    console.log(student);
}
createStudent();
