const Twitt = require("../models/Twitt.model.js");
const Comment = require("../models/Comment.model");
module.exports.twittController = {
  getTwitt: async (req, res) => {
    try {
      const data = await Twitt.find({});
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  getTwittById: async (req, res) => {
    try {
      const twitt = await Twitt.findById(req.params.id).populate(
        "comment like nickname",
        "nickname text name "
      );
      res.json(twitt);
    } catch (err) {
      res.json({
        error: err.message,
      });
    }
  },
  getTwittUser: async (req, res) => {
    try {
      const data = await Twitt.find({ nickname: req.params.userId });
    } catch (error) {
      res.json(error.toString());
    }
  },
  postTwitt: async (req, res) => {
    try {
      const { nickname, text, comment, date, like } = req.body;
      const data = await Twitt.create({
        nickname,
        text,
        comment,
        date,
        like,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchTwitt: async (req, res) => {
    try {
      const { nickname, text, comment, date, like } = req.body;
      const data = await Twitt.findByIdAndUpdate(req.body.id, {
        nickname,
        text,
        comment,
        date,
        like,
      });
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteTwitt: async (req, res) => {
    try {
      const data = await Twitt.findByIdAndRemove(req.body.id);
      res.json(data);
    } catch (error) {
      res.json(error.toString());
    }
  },
  addlike: async (req, res) => {
    try {
      await Twitt.findByIdAndUpdate(req.params.id, {
        $push: {
          like: req.body.like,
        },
      });
      res.json(`Лайк`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  addComment: async (req, res) => {
    try {
      const data = await Twitt.findByIdAndUpdate(req.params.id, {
        $push: {
          comment: await Comment.create({
            nickname: req.body.nickname,
            text: req.body.text,
          }),
        },
      });
      res.json(`Комментарий добавлен!`);
    } catch (error) {
      res.json(error.toString());
    }
  },
};
