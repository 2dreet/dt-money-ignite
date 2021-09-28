import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';


// configuracao de acessibilidade id da div do index.html

Modal.setAppElement("#root");

export function App() {

  const [isNewTransactionModalOpen, setNewTransactionModalOpen]  = useState(false);

  // sempre que uma função iniciar com handle quer dizer
  // que vai ser uma função executada pelo usuario
  // pode ser um click ou outra ação

  function handleOpenNewTrasactionModal () {
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal () {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewTrasactionModal} />
      <Dashboard />

      {/* configurando a modal */}
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTrasactionModal}
        >
            <h2>Cadatrar Transação</h2>
        </Modal>

      <GlobalStyle />
    </>
  );
}