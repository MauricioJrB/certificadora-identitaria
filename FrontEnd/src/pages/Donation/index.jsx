import './styles.css';
import obrigado from '../../assets/image/obrigado.png';
import qrCode from '../../assets/image/qr.png';
import { ContributionsList } from '../../components/ContributionsList';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Donation = () => {
  const [contributions, setContributions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Buscar dados da API
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        const data = response.data.posts;

        const formattedData = data.map((item) => ({
          name: item.username,
          timeAgo: `Contribuiu há ${item.timeAgo}`,
          contribution: `Contribuiu com R$ ${item.contribution}`,
        }));

        setContributions(formattedData);
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
      }
    };

    fetchContributions();
  }, []);

  // Alternar contribuições a cada 5 segundos
  useEffect(() => {
    if (contributions.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contributions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contributions]);

  return (
    <div className="container">
      <div className="img-container">
        <img src={qrCode} alt="qrcode" className="image" />
        <img src={obrigado} alt="obrigado" className="image2" />
      </div>
      <h1 className="title">Últimas Contribuições</h1>

      
      {contributions.length > 0 && (
        <div className="contribution-display">
          <ContributionsList contributions={[contributions[currentIndex]]} />
        </div>
      )}
    </div>
  );
};
