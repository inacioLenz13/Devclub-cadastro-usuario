import "./style.css";
import Lixeira from "../../assets/lixeira.png";

function Home() {
  const users = [
    {
      id: "123234234",
      name: "João",
      age: 25,
      email: "inaciolenz@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-email" name="imail" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome:<span>{user.name}</span></p>
            <p>Idade:<span>{user.age}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>
          <button>
            <img src={Lixeira} className="lixeira-icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
