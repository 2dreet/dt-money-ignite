import Modal from 'react-modal';

import { Container } from './styles';

// configuracao de acessibilidade id da div do index.html
Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClone: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClone} : NewTransactionModalProps) {
  return (
    <Container>
       {/* configurando a modal */}
       <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClone}
        >
            <h2>Cadatrar Transação</h2>
        </Modal>
    </Container>
  );
}