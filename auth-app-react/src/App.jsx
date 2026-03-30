import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./style.css";

import Auth from "./Auth";
import User from "./User";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔄 Loading estilizado
  if (loading) {
    return (
      <div className="container">
        <h2 className="loading">Carregando...</h2>
      </div>
    );
  }

  return (
    <>
      {user ? <User user={user} /> : <Auth />}
    </>
  );
}