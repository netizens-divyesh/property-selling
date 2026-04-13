const User = require("@models/userModel");

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });

  if (user) {
    return {
      user,
      message: "User updated successfully",
      status: 200,
    };
  } else {
    return {
      message: "User not found",
      status: 404,
    };
  }
};

const deleteUser = async (id) => {
  const user = await User.deleteOne({ _id: id });

  if (user.deletedCount > 0) {
    return {
      message: "User deleted successfully",
      status: 200,
    };
  } else {
    return {
      message: "User not found",
      status: 404,
    };
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
