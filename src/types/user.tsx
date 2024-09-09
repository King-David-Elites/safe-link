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
