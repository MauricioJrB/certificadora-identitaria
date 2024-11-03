//Importando o font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importando imagem
import logo from "../../assets/image/logo_utfpr.png";

//Importação do font-awesome para pegar o icone do instagram
import {
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//Importando estilo
import "./styles.css"; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Siga a gente em nossa rede social</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/bonsfluidosutfpr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a> 
        </div>
      </div>
      <img src={logo} alt="Logo utfpr" className="logo" />
    </footer>
  );
};
