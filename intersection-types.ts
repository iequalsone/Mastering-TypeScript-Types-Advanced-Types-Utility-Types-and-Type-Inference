type Person = { name: string };
type Employee = { employeeId: number };

type EmployeeDetails = Person & Employee;

const john: EmployeeDetails = {
  name: "John Doe",
  employeeId: 1234,
};
