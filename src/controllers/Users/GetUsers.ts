import UserModel from "../../models/UserModel"


export const GetUsers = async (req, res) => {

  const response = await UserModel.find().lean()

  res.status(200).json({ message: 'ok data users ', response})
}