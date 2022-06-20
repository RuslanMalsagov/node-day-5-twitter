const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(require("./routers"));

mongoose
  .connect("mongodb+srv://ruslan:ruslan@cluster0.0xuhw.mongodb.net/twitter", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = 4000;
    app.listen(port, () => {
      console.log(`Сервер успешно запущен http://localhost:${port}`);
    });
    console.log("Успешно соединились с сервером MongoDB");
  })
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));
