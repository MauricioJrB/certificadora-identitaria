import swaggerAutogen from 'swagger-autogen';

const output = './swagger_doc.json';
const endpoints = ['./app.js'];

const doc = {
    info: {
      title: 'API certificadora identitaria',
      version: '1.0.0',
      description: 'API para gerenciamento de distribuição de absorventes'
    },
    host: 'localhost:8000',
    basePath: '/',
    schemes: ['http']
};

swaggerAutogen(output, endpoints, doc);