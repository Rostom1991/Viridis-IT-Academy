const { login, signup } = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
