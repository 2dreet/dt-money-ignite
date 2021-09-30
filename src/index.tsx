import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  // aqui criamos uma tabela
  models: {
    transaction: Model,
  },

  // aqui definimos valores default para as tabelas iniciarem já populadas
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      // aqui retorna os registros da tabela
      return this.schema.all('transaction'); 
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // aqui insere o registro na tabela
      data.createAt = new Date();
      return schema.create('transaction', data); 
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);