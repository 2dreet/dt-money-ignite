import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

// configuracao de acessibilidade id da div do index.html
Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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

        <Container>
          <h2>Cadatrar Transação</h2>
          
          <input 
            placeholder="Título" 
          />

          <input 
            type="number" 
            placeholder="Valor" 
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
          />

          <button type="submit">
            Cadastrar
          </button>

        </Container>
    </Modal>
  );
}