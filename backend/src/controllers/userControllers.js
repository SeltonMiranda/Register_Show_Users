const usersModel = require("../models/userModels");

const getAll = async (req, res) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const selectUser = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.selectUser(id);
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  await usersModel.createUser(req.body);
  res.status(201).json({message: "successful created!"});
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await usersModel.deleteUser(id);
  res.status(204).json({message: "succesful deleted!"});
};

const updateUser = async (req, res) => {
  await usersModel.updateUser(req.body, req.params);
  res.status(200).json({message: "successful!"});
};

module.exports = {
  getAll,
  selectUser,
  createUser,
  deleteUser,
  updateUser
}
