// TIPAGEM ESTRUTURADA

type VerificaUsuario = (user: User, sentValue: User) => boolean;

type User = {
  name: string;
  email: string;
  address?: string;
};

const verificaUsuario: VerificaUsuario = (user, sentValue) => {
    if(user.name !== sentValue.name) return false;
    return user.email === sentValue.email && user.address === sentValue.address;
}

const bdUser: User = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "Rua dos Bobos, 0"
};
const sentUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "Rua dos Bobos, 0"
};
const logado = verificaUsuario(bdUser, sentUser);
console.log(logado);