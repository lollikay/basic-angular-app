export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: Date;
  address: {
    country: string;
    postalCode: string;
  }
  bank: {
    currency: string;
  }
}