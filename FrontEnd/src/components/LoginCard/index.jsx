import styles from './styles.module.css';
import { useState } from 'react';
import { login } from '../../services/authService';

export const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    const emailAuth = email;
    const passwordAuth = password;

    const result = await login(emailAuth, passwordAuth);

    setLoading(false);

    if (result.success) {
      console.log("Token recebido:", result.token);
      window.location.href = "/"; 
    } else {
      console.error("Erro no login:", result.message);
      alert("Erro no login: " + result.message); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className={styles.button} 
            disabled={loading} 
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};
