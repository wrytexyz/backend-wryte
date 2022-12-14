const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  getLoggedInUserDetails,
  updateUserDetails,
  allUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserById,
  follow,
  unFollow
} = require("../controllers/userController");
const { isLoggedIn, isAdmin } = require("../middlewares/user");

// User 
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/user").get(isLoggedIn, getLoggedInUserDetails);
router.route("/user/:id").get(isLoggedIn, getUserById);
router.route("/user/update").post(isLoggedIn, updateUserDetails);
router.route("/follow").put(isLoggedIn, follow);
router.route("/unfollow").put(isLoggedIn, unFollow);


//Admin
router.route("/admin/users").get(isLoggedIn, isAdmin('admin'), allUser);
router
    .route("/admin/user/:id")
    .get(isLoggedIn, isAdmin('admin'), getSingleUser)
    .put(isLoggedIn, isAdmin("admin"), updateUser)
    .delete(isLoggedIn, isAdmin("admin"), deleteUser)



module.exports = router;
