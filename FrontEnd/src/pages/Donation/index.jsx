import './styles.css';
import obrigado from '../../assets/image/obrigado.png';
import qrCode from '../../assets/image/qr.png';
import { ContributionsList } from '../../components/ContributionsList';

export const Donation = () => {
  const contributions = [
    {
      name: 'Leandro',
      timeAgo: '2 horas atrás',
      contribution: 'Contribuiu',
    },
    {
      name: 'Maurício',
      timeAgo: '1 dia atrás',
      contribution: 'Contribuiu',
    },
    {
      name: 'Victor',
      timeAgo: '3 dias atrás',
      contribution: 'Contribuiu',
    },
    {
      name: 'Kodi',
      timeAgo: '4 dias atrás',
      contribution: 'Contribuiu',
    },
  ];
  return (
    <div className="container">
      <div className="img-container">
        <img src={qrCode} alt="qrcode" className="image" />
        <img src={obrigado} alt="obrigado" className="image2" />
      </div>
      <h1 className="title">Últimas Contribuições</h1>
      <ContributionsList contributions={contributions} />
    </div>
  );
};
