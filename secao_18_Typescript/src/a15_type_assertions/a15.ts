// TYPE ASSERTIONS

// 1. Type Assertions com "as"
const body = document.querySelector("body") as HTMLBodyElement;
body.innerHTML = "Olá";

// 2. Type Assertions com "<>"
const input = <HTMLInputElement>document.querySelector("input");
input.value = "Olá";

// 3. Type Assertions com "as" e tipos personalizados
type User = {
  name: string;
  email: string;
};
const user = {} as User;
user.name = "John Doe";
user.email = "john@gmail.com"
console.log(user);

