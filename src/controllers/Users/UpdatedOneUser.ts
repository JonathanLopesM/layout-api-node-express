import UserModel from "../../models/UserModel"

export const UpdatedOneUser = async (req, res) => {
  const { id } = req.params

  const response = await UserModel.findOneAndUpdate({ _id: id }, req.body)


  res.status(200).json({ message: `Updated data One user ${id}`, response})
}