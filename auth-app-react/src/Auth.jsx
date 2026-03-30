import { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login realizado com sucesso!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Conta criada com sucesso!");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage("Erro: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h2>{isLogin ? "Entrar" : "Criar conta"}</h2>

      {loading && <p className="loading">Carregando...</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Carregando..."
            : isLogin
            ? "Entrar"
            : "Cadastrar"}
        </button>
      </form>

      {message && <p>{message}</p>}

      <button
        className="toggle-btn"
        onClick={() => {
          setIsLogin(!isLogin);
          setMessage("");
        }}
      >
        {isLogin
          ? "Não tem conta? Cadastre-se"
          : "Já tem conta? Faça login"}
      </button>
    </div>
  );
}