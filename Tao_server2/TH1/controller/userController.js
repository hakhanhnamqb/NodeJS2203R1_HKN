const UserModel = require('../model/user');
const bcrypt = require('bcrypt');

exports.userRegister = async (req, res, next) => {
    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
        res.redirect('/user/register');
    } else {
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const userData = {
            username: req.body.username,
            password: passwordHash
        }
        const userNew = await UserModel.create(userData);
        if (userNew) {
            res.redirect('/user/login');
        } else {
            res.redirect('/user/register');
        }
    }
}

exports.userLogin = async (req, res, next) => {
    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
        const compatePassword = await bcrypt.compare(req.body.password, user.password);
        if (!compatePassword) {
            res.redirect('/user/login');
        } else {
            res.redirect('/user/success');
            req.session.userId = user._id;
        }
    } else {
        res.redirect('/user/login');
    }
}
// exports.userLogin = async function (req, res, next) {
//     const { username, password } = req.body;
//     UserModel.findOne({ username: username }, (error, user) => {
//         if (user) {
//             bcrypt.compare(password, user.password, (err, same) => {
//                 if (same) {
//                     req.session.userId = user._id
//                     res.redirect('/')
//                 } else { res.redirect('/user / login') }
//             })
//         } else { res.redirect('/user/login') }
//     })
// }
