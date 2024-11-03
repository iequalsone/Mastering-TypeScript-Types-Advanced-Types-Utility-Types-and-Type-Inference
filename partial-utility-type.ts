type User = {
  name: string;
  age: number;
  email: string;
};

const updateUser = (id: string, updatedProperties: Partial<User>) => {
  // ...update logic
};

updateUser("123", { email: "newemail@example.com" });
