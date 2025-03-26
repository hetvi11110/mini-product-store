export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  name: Name;
  phone: string;
}
