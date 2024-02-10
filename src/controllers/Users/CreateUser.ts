import bcrypt from 'bcrypt'
import UserModel from "../../models/UserModel"


export const CreateUser = async (req, res) => {
  const { email, name, password, confirmpassword, active, nivel } = req.body
  
  if(!email){
    return res.status(422).json({ message: 'O email é obrigatório'})
  }
  if(!name){
    return res.status(422).json({ message: 'O nome é obrigatório'})
  }
  if(!password){
    return res.status(422).json({ message: 'A Senha é obrigatória'})
  }
  if(!active){
    return res.status(422).json({ message: 'O Active é obrigatório'})
  }
  if(!nivel){
    return res.status(422).json({ message: 'O Nivel de usuário é obrigatório'})
  }
  if(password !== confirmpassword) {
    return res.status(422).json({ message: 'As senhas não conferem!'})
  }

  // check if User exists
  const userExists = await UserModel.findOne({email: email}, null , { lean:true })
  if(userExists){
      return res.status(422).json({ message: 'Username já vinculado a uma conta!'})
  }
  // create password
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  //create User

  let user = new UserModel({
      email,
      name,
      password:passwordHash,
      active,
      nivel
    })
    await user.save()

  res.status(201).json({
    message: `The user created with name ${name}`
  }) 

}