const PostModel = require('../model/post');

exports.postRegister = async (req, res, next) => {
    console.log(req.decode, 'req.body');
    const postdata = {
        title: req.body.title,
        content: req.body.content,
    }
    const postRegister = await PostModel.create(postdata);
    if (postRegister) {
        res.json({ post: postRegister })
    } else {
        res.json({ err: "Create post error" })
    }
}

exports.postList = async (req, res, next) => {
    try {
        const posts = await PostModel.find();
        res.json({posts: posts});
    } catch(err) {
        console.log(err);
    }
}
