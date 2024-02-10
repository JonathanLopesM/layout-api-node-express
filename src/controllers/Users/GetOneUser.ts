import UserModel from "../../models/UserModel"

export const GetOneUser = async (req, res) => {
  const { id } = req.params

  const data = await UserModel.findOne({ _id: id }, { _id: true, name: true, email: true, active: true, nivel: true }, { lean: true })

  res.status(200).json({ message: `ok data One user ${id}`, data})
}