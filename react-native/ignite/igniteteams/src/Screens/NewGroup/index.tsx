import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNew = () => {
    navigation.navigate('players', { group });
  };

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
          onChangeText={setGroup}
        />

        <Button
          type='PRIMARY'
          title='Criar'
          onPress={handleNew}
        />
      
      </Content>

    </Container>
  );
};