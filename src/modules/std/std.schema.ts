import { Schema, model } from 'mongoose'

interface IStd {
  doctor_id: string
  address: string
  address_code: string
  store_address: string
}

const stdSchema = new Schema<IStd>({
  doctor_id: { type: String, required: true, unique: false },
  address: { type: String, required: true, unique: false },
  address_code: { type: String, required: true, unique: false },
  store_address: { type: String, required: true, unique: false },
})

export const Std = model<IStd>('Std', stdSchema)
