const { Router } = require("express");
const { twittController } = require("../controllers/twitts.controller.js");
const router = Router();

router.get("/twitt", twittController.getTwitt);
// router.get("/twitt/:id", twittController.getTwittId);
router.get("/twitt/user/:id", twittController.getTwittUser);
router.post("/twitt", twittController.postTwitt);
router.delete("/twitt/:id", twittController.deleteTwitt);
router.patch("/twitt/:id", twittController.patchTwitt);
router.patch("/twitt/:id/like", twittController.addlike);
router.patch("/twitt/:id/comment", twittController.addComment);
router.get('/twitt/:id', twittController.getTwittById);

module.exports = router;
