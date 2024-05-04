import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '../../utils/AppError';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNew = async () => {
    try{
      if(!group.trim().length) {
        return Alert.alert('Novo Group', 'Informe o nome da turma.')
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {

      if(error instanceof AppError) {
        Alert.alert('Novo Group', error.message)
      } else {
        Alert.alert('Novo Group', 'Não foi passível criar um novo grupo.')
      }
    }
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