import UserModel from "../../models/UserModel"

export const DeleteOneUser = async (req, res) => {
  const { id } = req.params

  const response = await UserModel.findOneAndDelete({_id: id})

  console.log(response, 'response')

  res.status(200).json({ message: `Delete One user ${id}, user: ${response}`})
}