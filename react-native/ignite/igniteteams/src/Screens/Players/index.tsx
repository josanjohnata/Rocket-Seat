import { Header } from '@components/Header';

import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separes os times'
      />

      <ButtonIcon />
    </Container>
  );
};