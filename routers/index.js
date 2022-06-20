const { Router } = require("express");
const router = Router();

router.use(require("./comments.route.js"));
router.use(require("./users.router.js"));
router.use(require("./twitts.route.js"));

module.exports = router;
