const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const router = Router();

router.get("/users", userController.getUser);
router.get("/users/:id", userController.getIdUser);
router.post("/users", userController.postUser);
router.delete("/users/:id", userController.deleteUser);
router.patch("/users/:id", userController.patchUser);
router.patch("/users/:id/saves", userController.addSaves);

module.exports = router;
