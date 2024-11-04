interface User {
  id: string;
  email: string;
  phoneNumber?: string;
  profilePicture?: string;
  about?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  leisurePictures?: string[];
  professionalPictures?: string[];
  workPictures?: string[];
  createdAt?: string;
  updatedAt?: string;
  __v: number;
  _id: string;
}

// export interface Root {
//   _id: string
//   email: string
//   profilePicture: string
//   professionalPictures: string[]
//   workPictures: string[]
//   leisurePictures: string[]
//   createdAt: string
//   updatedAt: string
//   __v: number
//   country: string
//   about: string
//   address: string
//   city: string
//   phoneNumber: string
//   state: string
//   zipCode: string
//   id: string
// }
