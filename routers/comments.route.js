const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller.js");

const router = Router();

router.get("/comment", commentController.getComment);
router.get("/comment/twitt/:id", commentController.getCommentTwitt);
router.get("/comment/user/:id", commentController.getCommentUser);
router.post("/comment", commentController.postComment);
router.patch("/comment/:id", commentController.patchComment);
router.delete("/comment/:id", commentController.deleteComment);

module.exports = router;
