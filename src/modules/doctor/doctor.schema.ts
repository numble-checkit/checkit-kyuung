import { Schema, model } from 'mongoose'

interface IImage {
  type: number
  url: string
}

interface IDoctor {
  doctor_id: string
  available_hours: string
  available_weekday: string
  description: string
  doctor_display_name: string
  doctor_image_url: string
  doctor_images: Array<IImage>
  doctor_tel: string
  hospital_addr: string
  hospital_name: string
  lab_addr: string
  lab_name: string
  lab_postal_code: string
  lab_receiver_name: string
  lab_tel: string
  lat: string
  lng: string
  professional_statement: string
  subjects: string
}

const doctorSchema = new Schema<IDoctor>({
  doctor_id: { type: String, required: true, unique: true },
  available_hours: { type: String, required: true, unique: false },
  available_weekday: { type: String, required: true, unique: false },
  description: { type: String, required: true, unique: false },
  doctor_display_name: { type: String, required: true, unique: true },
  doctor_image_url: { type: String, required: true, unique: false },
  doctor_images: { type: Schema.Types.Mixed, required: false, unique: false },
  doctor_tel: { type: String, required: true, unique: true },
  hospital_addr: { type: String, required: true, unique: false },
  hospital_name: { type: String, required: true, unique: false },
  lab_addr: { type: String, required: true, unique: false },
  lab_name: { type: String, required: true, unique: false },
  lab_postal_code: { type: String, required: true, unique: false },
  lab_receiver_name: { type: String, required: true, unique: false },
  lab_tel: { type: String, required: true, unique: false },
  lat: { type: String, required: false, unique: false },
  lng: { type: String, required: false, unique: false },
  professional_statement: { type: String, required: false, unique: false },
  subjects: { type: String, required: false, unique: false },
})

export const Doctor = model<IDoctor>('Doctor', doctorSchema)
