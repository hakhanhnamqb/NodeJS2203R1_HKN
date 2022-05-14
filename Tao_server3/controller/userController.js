const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (user) {
            const compatePassword = await bcrypt.compare(req.body.password, user.password);
            if (!compatePassword) {
                return res.json({ err: "login fail" });
            } else {
                let payload = {
                    user_id: user.id,
                    username: user.name,
                }
                const token = jwt.sign(payload, 'namhk', {
                    expiresIn: 36000
                });
                return res.json({ token: token, code: 200 })
            }
        } else {
            return res.json({ err: "login fail" });
        }
    } catch(err) {
        console.log(err);
    }
}