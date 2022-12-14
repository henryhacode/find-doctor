export interface AppointmentPatient {
  doctor: {
    username: string,
    fullname: string
    avatarurl: string,
    specialty: string,
    phone: string
  },
  location: {
    city: string,
    state: string,
    street: string,
    zipcode: string
  },
  status: string,
  time: number
}
