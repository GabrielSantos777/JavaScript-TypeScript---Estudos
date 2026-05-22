// CONSTRUTORES PRIVADOS

class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Conectando ao banco de dados em ${this.host} com o usuário ${this.user} com a senha ${this.password}`,
    );
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância existente');
      return Database.database;
    }
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();
const db2 = Database.getDatabase("localhost", "root", "123456");
db2.connect();
