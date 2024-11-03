type UserWithOptionalAge = {
  name: string;
  age?: number;
};

const user: Required<UserWithOptionalAge> = {
  name: "Alice",
  age: 30,
};
