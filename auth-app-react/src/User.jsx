import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export default function User({ user }) {
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  }

  return (
    <div className="container">
      <h2>Bem-vindo 👋</h2>

      <p>
        Logado como:
        <br />
        <strong>{user.email}</strong>
      </p>

      <button onClick={logout}>Sair</button>
    </div>
  );
}