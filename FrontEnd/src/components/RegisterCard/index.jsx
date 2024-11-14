import styles from './styles.module.css';
import { useState } from 'react';

export const RegisterCard = () => {
  const [nomeDono, setnomeDono] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [donationDate, setDonationDate] = useState('');

  const handlenomeDonoChange = (e) => setnomeDono(e.target.value);
  const handleProductDescriptionChange = (e) =>
    setProductDescription(e.target.value);
  const handleDonationDateChange = (e) => setDonationDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de submissão do formulário
    console.log('Nome do doador:', nomeDono);
    console.log('Descrição do Produto:', productDescription);
    console.log('Data da doação:', donationDate);
  };

  return (
    <div className={styles.productCard}>
      <h1 className={styles.titleRegister}>Cadastrar produto</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nomeDono">Nome do doador</label>
          <br></br>
          <input
            type="text"
            id="nomeDono"
            placeholder="Nome do doador"
            value={nomeDono}
            onChange={handlenomeDonoChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="productDescription">Descrição do Produto</label>
          <br></br>
          <textarea
            className={styles.productDescription}
            type="text"
            id="productDescription"
            placeholder="Descrição do Produto"
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="donationDate">Data da doação</label>
          <br></br>
          <input
            type="text"
            id="donationDate"
            value={donationDate}
            onChange={handleDonationDateChange}
            placeholder="dia-mês-ano"
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
