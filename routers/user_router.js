const express = require("express");
const {
  getAllUser,
  getMe,
  getUser,
  updateMe,
  deleteMe,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const {
  protect,
  signup,
  login,
} = require("../controllers/authorization/authController");
const {
  buyPass,
  getPasses,
  getAllPasses,
  cancelPass,
  getAllTrending,
} = require("../controllers/eventUserController");

const userRouter = express.Router();

userRouter.route("/").get(getAllUser);
userRouter.route("/me").get(protect, getMe, getUser);
userRouter.route("/updateMe").patch(protect, updateMe);
userRouter.route("/deleteMe").delete(protect, deleteMe);
userRouter.route("/buyPass").post(protect, buyPass);
userRouter.route("/CancelPass").post(protect, cancelPass);

// userRouter.route("/pass").get(protect, getMe, getAllPasses);
userRouter.route("/pass").get(protect, getMe, getAllPasses);
userRouter.route("/trending").get(getAllTrending);


userRouter.route("/pass/:id").get(getPasses);

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = userRouter;
