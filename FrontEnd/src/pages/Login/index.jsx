import { LoginCard } from '../../components/LoginCard';
import './styles.css';
import React, { useEffect } from 'react';

export const Login = () => {
  useEffect(() => {
    document.body.classList.add('bg');

    return () => {
      document.body.classList.remove('bg');
    };
  }, []);
  return (
    <>
      <LoginCard />
    </>
  );
};
