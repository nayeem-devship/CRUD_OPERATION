import UserDb from "../Model/userModel.js";

export async function addUser(req, res, next) {
  try {
    const data = req.body;
    const details = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    };
    const CreateUser = await UserDb.create(details);
    res.status(200).json({
      message: "User Register Successfully",
      data: CreateUser,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function getUser(req, res, next) {
  try {
    const getUser = await UserDb.find();
    res.status(200).json({
      message: "get Successfully",
      data: getUser,
    });
  } catch (err) {
    next();
  }
}

export async function deleteUser(req, res, next) {
  try {
    const data = req.params;
    const userId = data.id;
    const deleteUser = await UserDb.findByIdAndDelete(userId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteUser,
    });
  } catch (err) {
    next();
  }
}

export async function updateUser(req, res, next) {
    try {
      const data = req.body;
      const id = req.params.id;
      const details = {
        userName: data.userName,
        email: data.email,
        password: data.password,
      };
      const updateUser = await UserDb.findByIdAndUpdate(id, details, {
        new: true,
      });
      res.status(200).json({
        message: "Updated Successfully",
        data: updateUser,
      });
    } catch (err) {
      next();
    }
  }