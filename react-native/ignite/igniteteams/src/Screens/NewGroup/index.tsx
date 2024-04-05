import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight
          title='Nova turma'
          subtitle='Crie a turma para adicionar as pessoas'
        />

        <Input
          placeholder='Nome da turma'
        />

        <Button type='PRIMARY' title='Criar'/>
      
      </Content>

    </Container>
  );
};