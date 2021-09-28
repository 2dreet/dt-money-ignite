import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTrasactionModal';
import { GlobalStyle } from './styles/global';



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
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClone={handleCloseNewTrasactionModal}
      />
      <GlobalStyle />
    </>
  );
}