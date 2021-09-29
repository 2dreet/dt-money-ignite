import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  // aqui criamos uma tabela
  models: {
    transaction: Model, 
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