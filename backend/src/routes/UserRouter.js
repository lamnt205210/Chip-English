const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const { authUserMiddleware } = require("../middleware/authMiddleware");
router.post("/sign-up", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.get(
  "/get-details/:id",
  authUserMiddleware,
  userController.getDetailsUser
);
router.post("/refresh-token", userController.refreshToken);
module.exports = router;
