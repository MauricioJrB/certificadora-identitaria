
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './Styles.css';
import { ContributionsList } from '../../components/ContributionsList';
import { NavLink } from 'react-router-dom';
export const CollectionPoint = () => {
 
  const [contributions, setContributions] = useState([]);
  // const contributions = [
  //   {
  //     name: 'Leandro',
  //     timeAgo: '07/10/2024',
  //     contribution: 'Doou 5 coletores menstruais',
  //   },
  //   {
  //     name: 'Maurício',
  //     timeAgo: '09/10/2024',
  //     contribution: 'Doou 10 pacotes de absorvente',
  //   },
  //   {
  //     name: 'Victor',
  //     timeAgo: '11/11/2024',
  //     contribution: 'Doou 20 pacotes de absorvente',
  //   },
  //   {
  //     name: 'Kodi',
  //     timeAgo: '12/11/2024',
  //     contribution: 'Doou 13 OB',
  //   },
  // ];

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/produtos'); 
          const data = response.data;
          console.log(data);

    
        const formattedData = data.map((item) => ({
          name: item.name,
          timeAgo: `Doação realizada em ${item.date}`,
          contribution: `${item.description}`,
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
      <h2 className="title">Pontos de Coleta</h2>
      <MapContainer
        center={[-23.1823, -50.6514]}
        zoom={13}
        style={{ height: '800px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.1865, -50.6565]}>
          <Popup>Ponto de coleta em Cornélio Procópio, PR.</Popup>
        </Marker>
      </MapContainer>
      <NavLink to="/Register">
        <h3>Cadastrar Contribuição</h3>
      </NavLink>
      <h2 className="title">Ultimas doações</h2>
      <ContributionsList contributions={contributions} />
    </div>
  );
};
