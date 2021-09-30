import { Container } from './styles';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { getNumberToMoney } from '../../util/FormatNumber';

export function Summary(){
  const {transactions} = useTransactions();

  // reduz uma lista em uma varial, pode ser um total ou um conjuto de dados
  const summary = transactions.reduce((acumuletor, transaction) => {
    if (transaction.type === 'deposit') {
      acumuletor.deposits += transaction.amount;
      acumuletor.total += transaction.amount;
    } else {
      acumuletor.withdraw += transaction.amount;
      acumuletor.total -= transaction.amount;
    }

    return acumuletor;
  },
  {
    deposits: 0,
    withdraw: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p> Entradas </p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong> {getNumberToMoney(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p> Saídas </p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong>- {getNumberToMoney(summary.withdraw)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p> Total </p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> {getNumberToMoney(summary.total)}</strong>
      </div>
    </Container>
  )
}