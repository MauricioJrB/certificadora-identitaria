
import './styles.css';
import imgRegister from '../../assets/image/register.png';
import { RegisterCard } from '../../components/RegisterCard';
export const Register = () => {
  return (
    <div className="containerRegister">
      <RegisterCard />
      <img src={imgRegister} alt="register" className="image" />
    </div>
  );
};
