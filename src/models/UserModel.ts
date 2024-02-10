import mongoose, { Schema } from "mongoose";

export interface IUser {
  email: string
  name:string;
  password:string;
  active:boolean;
  nivel:number;
}
const userSchema = new Schema({
  email: {type: String},
  name: {type: String},
  password: String,
  passwordResetToken: {
    type: String,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select: false
  },
  active: { type:Boolean },
  nivel: { type:Number },
  
  
})

export default mongoose.model<IUser>('Users', userSchema, 'users' )



