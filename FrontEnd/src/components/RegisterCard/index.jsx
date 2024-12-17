import styles from './styles.module.css';
import { useState } from 'react';
import axios from 'axios';

export const RegisterCard = () => {
  const [nomeDono, setnomeDono] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlenomeDonoChange = (e) => setnomeDono(e.target.value);
  const handleProductDescriptionChange = (e) =>
    setProductDescription(e.target.value);
  const handleDonationDateChange = (e) => setDonationDate(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post(
        'http://localhost:8000/produto/cadastro',
        {
          name: nomeDono,
          description: productDescription,
          date: donationDate,
        },
      );

      if (response.status === 200) {
        setSuccessMessage('Produto cadastrado com sucesso!');
        setnomeDono('');
        setProductDescription('');
        setDonationDate('');
      }
    } catch (error) {
      setErrorMessage(
        'Erro ao cadastrar o produto: ' + error.response?.data?.msg ||
          error.message,
      );
    }
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
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};
