const express = require("express");
const router = express.Router();
router.use(express.json());
const userController = require("./controllers/userControllers");


router.get("/users", userController.getAll);
router.get("/users/:id", userController.selectUser);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.patch("/users/:id", userController.updateUser);


module.exports = router;


