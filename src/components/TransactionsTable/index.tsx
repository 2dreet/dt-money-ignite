import { useTransactions } from '../../hooks/useTransactions';
import { getNumberToMoney } from '../../util/FormatNumber';
import { Container } from './styles';

export function TrasactionsTable(){
  const {transactions} = useTransactions();
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
          {transactions && transactions.map(transaction => 
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' ? '- ' : ''}
                {getNumberToMoney(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pr-BR').format(new Date(transaction.createAt))}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  )
}