type WithoutEmail = Omit<FullUser, "email">;

const userWithoutEmail: WithoutEmail = {
  id: "001",
  name: "Carol",
  age: 28,
};
