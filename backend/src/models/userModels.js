const connection = require("./connection");

const getAll = async () => {
    const [user] = await connection.execute("SELECT * FROM Users");
    return user;
  };

const selectUser = async (id) => {
  const query = "SELECT * FROM Users WHERE id=?";
  const [user] = await connection.execute(query, [id]);
  return user; 
};

const createUser = async ([user]) => {
  const query = "INSERT INTO Users(name, age, profession) VALUES (?, ?, ?)";
  const res = await connection.execute(query,[user.name, user.age, user.profession]);
};

const deleteUser = async (id) => {
  const query = "DELETE FROM Users WHERE id=?";
  const res = await connection.execute(query, [id]);
};

const updateUser = async ([user], { id }) => {
  const query = "UPDATE Users SET name=?, age=?, profession=? WHERE id=?";
  const res = await connection.execute(query, [user.name, user.age, user.profession, id]);
};

module.exports = {
  getAll,
  selectUser,
  createUser,
  deleteUser,
  updateUser
};
