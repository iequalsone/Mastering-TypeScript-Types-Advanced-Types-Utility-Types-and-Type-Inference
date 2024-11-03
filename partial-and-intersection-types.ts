type Address = {
  street: string;
  city: string;
};

type UserProfile = {
  name: string;
  age: number;
} & Partial<Address>;

const user: UserProfile = {
  name: "Eve",
  age: 32,
  city: "New York", // street is optional due to Partial
};
