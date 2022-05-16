const libraryModel = require('../model/libraryModel');
exports.addLibrary = async (req, res, next) => {
    console.log(req.body);
    const librarys = await libraryModel.findOne({ libraryName: req.body.libraryName });
    if (!librarys) {
        const libraryData = {
            libraryName: req.body.libraryName,
            librarian: req.body.librarian
        }
        const libraryNew = await libraryModel.create(libraryData);
        if (libraryNew){
            res.json({libraryNew: libraryNew});
        }
    }
    else{
        // res.json("Library " + req.body.libraryName + " does exist");
        res.redirect('/book/createBook');
    }
}