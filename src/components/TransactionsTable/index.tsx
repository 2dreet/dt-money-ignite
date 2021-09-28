import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TrasactionsTable(){

  useEffect(()=>{
    api.get('transactions')
    .then( response => console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Teste</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Teste Categoria</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Teste</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Teste Categoria</td>
            <td>20/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}