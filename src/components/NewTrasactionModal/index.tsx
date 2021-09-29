import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';

// configuracao de acessibilidade id da div do index.html
Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps) {
  const [ title, setTitle] = useState('');
  const [ value, setValue ]= useState(0);
  const [ category, setCategory ] = useState('');
  const [type, setType] = useState('deposit');

  // quando utilizamos o preventDeafault não recarega a pagina qunado o form é submetido
  // FormEvent tipagem do submit do form
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  /* configurando a modal */
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadatrar Transação</h2>
          
          <input 
            placeholder="Título" 
            // aqui mostra o valor 
            value={title}
            // aqui seta no estado o valor digitado
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number" 
            placeholder="Valor" 
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={()=> { setType('deposit')} }
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={()=> { setType('withdraw')} }
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída"/>
              <span>Saída</span>
            </RadioBox>

          </TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>

        </Container>
    </Modal>
  );
}