function add(x: number, y: number) {
  return x + y; // TypeScript infers the return type as number
}

const sum = add(3, 5); // sum is inferred as number
