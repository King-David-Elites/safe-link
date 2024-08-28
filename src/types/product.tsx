export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: [string];
  videos: [string];
  owner: {
    firstName: string;
    lastName: string;
    _id: string;
    about: string;
    profilePicture: string;
    professionalPictures: [string];
    workPictures: [string];
    leisurePictures: [string];
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    phoneNumber: number;
  };
}
