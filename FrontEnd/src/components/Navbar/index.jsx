import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo_png.png";
import { useState, useEffect } from "react";
import { getToken, clearToken } from "../../services/authService";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAunthenticated, setIsAuthenticated] = useState(!!getToken());

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    clearToken();
    setIsAuthenticated(false);
  }

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${showNav ? styles.visible : styles.hidden}`}
    >
      <NavLink to="/" className={styles.brand}>
        <img src={logo} alt="Logo" className={styles.tam} />
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/Donation"
            className={({ isActive }) =>
              `${styles.noEffect} ${isActive ? styles.active : ""}`
            }
          >
            Doar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/CollectionPoint"
            className={({ isActive }) =>
              `${styles.noEffect} ${isActive ? styles.active : ""}`
            }
          >
            Pontos de doação
          </NavLink>
        </li>
        {isAunthenticated ? (
        <>
          <li>
            <NavLink
              to="/Register"
              className={({ isActive }) =>
                `${styles.noEffect} ${isActive ? styles.active : ''}`
              }
            >
              Cadastrar produto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Auth"
              onClick={handleLogout}
              className={({ isActive }) =>
                `${styles.noEffect} ${isActive ? styles.active : ''}`
              }
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to="/Auth"
            className={({ isActive }) =>
              `${styles.noEffect} ${isActive ? styles.active : ''}`
            }
          >
            Login
          </NavLink>
        </li>
      )}
      </ul>
    </nav>
  );
};
