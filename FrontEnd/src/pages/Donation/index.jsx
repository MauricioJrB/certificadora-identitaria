import './styles.css';
import obrigado from '../../assets/image/obrigado.png';
import qrCode from '../../assets/image/qr.png';
import { ContributionsList } from '../../components/ContributionsList';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Donation = () => {
  const [contributions, setContributions] = useState([]);


  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/posts'); 
          const data = response.data.posts;
          console.log(data);

    
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
