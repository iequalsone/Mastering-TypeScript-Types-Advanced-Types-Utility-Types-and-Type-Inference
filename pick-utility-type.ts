type FullUser = {
  id: string;
  name: string;
  email: string;
  age: number;
};

type UserContactInfo = Pick<FullUser, "name" | "email">;

const contact: UserContactInfo = {
  name: "Bob",
  email: "bob@example.com",
};
