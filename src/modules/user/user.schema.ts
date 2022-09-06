import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  key: string
  email: string
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  key: { type: String, required: true },
  name: { type: String, required: true, unique: true },
})

export const User = model<IUser>('User', userSchema)
