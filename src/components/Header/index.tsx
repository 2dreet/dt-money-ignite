import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTrasactionModal: () => void;
}

export function Header ({ onOpenNewTrasactionModal } : HeaderProps){
  return (
    <Container >
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTrasactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}