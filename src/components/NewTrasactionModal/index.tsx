import Modal from 'react-modal';

import { Container } from './styles';

// configuracao de acessibilidade id da div do index.html
Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClone: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClone} : NewTransactionModalProps) {
  
  /* configurando a modal */
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClone}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
        <Container>
          <h2>Cadatrar Transação</h2>
          
          <input 
            placeholder="Título" 
          />

          <input 
            type="number" 
            placeholder="Valor" 
          />

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