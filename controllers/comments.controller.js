const Comment = require("../models/Comment.model.js");

module.exports.commentController = {
  getComment: async (req, res) => {
    try {
      const data = await Comment.find({}).populate("user");
      res.json(`Комментарии`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  getCommentTwitt: async (req, res) => {
    try {
      const data = await Comment.findById(req.body.id).populate("user");
      res.json("Комментарии твита");
    } catch (error) {
      res.json(error.toString());
    }
  },
  getCommentUser: async (req, res) => {
    try {
      const data = await Comment.find({ nickname: req.body.nickname });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteComment: async (req, res) => {
    try {
      const data = await Comment.findByIdAndRemove(req.body.id);
      res.json(`Комментарий ${data} удален!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  postComment: async (req, res) => {
    try {
      const { nickname, text,} = req.body;
      const data = await Comment.create({
        nickname,
        text,
      });
      res.json(`Комментарий ${data} добавлен!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchComment: async (req, res) => {
    try {
      const { nickname, text, twitt } = req.body;
      const data = await Comment.findByIdAndUpdate(req.body.id, {
        nickname,
        text,
        twitt,
      });
    } catch (error) {
      res.json(error.toString());
    }
  },
};
