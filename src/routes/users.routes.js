const { Router } = require("express");
const usersRoutes = Router();
const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const uploadConfig = require("../configs/upload");
const multer = require("multer");
const upload = multer(uploadConfig.MULTER);


usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.delete("/", ensureAuthenticated, usersController.delete);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;