const User = require("../models/User.model.js");

module.exports.userController = {
  postUser: async (req, res) => {
    const { name, save } = req.body;
    try {
      await User.create({
        name,
        save,
      });
      res.json(`Пользавтель ${name} добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json(`Пользователь с id:${req.params.id} удален!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchUser: async (req, res) => {
    const { name, save } = req.body;
    try {
      await User.findByIdAndUpdate(req.params.id, {
        name,
        save,
      });
      res.json(`Пользователь с id:${req.params.id} изменен!`);
    } catch (error) {
      console.log(error);
    }
  },
  addSaves: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          saves: req.body.saves,
        },
      });
      res.json(`сохранен`);
    } catch (error) {
      console.log(error);
    }
  },

  getUser: async (req, res) => {
    try {
      res.json(await User.find({}));
    } catch (error) {
      console.log(error);
    }
  },

  getIdUser: async (req, res) => {
    try {
      res.json(await User.findById(req.params.id)).populate('saves ');
    } catch (error) {
      console.log(error);
    }
  },
};
