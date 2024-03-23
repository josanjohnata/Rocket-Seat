import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import '../../translation/hooks/i18n';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  const { t } = useTranslation();

  const formatDate = (date: Date): string => {
    const formattedDate = format(date, "EEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const handleParticipantAdd = () => {
    if(participants.includes(participantName)) {
      return Alert.alert(t('home.alertAddParticipant.title'), t('home.alertAddParticipant.description'));
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    

    Alert.alert(t('home.alertRemoveParticipant.title'), `${t('home.alertRemoveParticipant.description')} ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        {t('home.title')}
      </Text>

      <Text style={styles.eventDate}>
        {formattedDate}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={t('home.textInput')}
          placeholderTextColor='#6B6B6B'
          onChangeText={event => setParticipantName(event)}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            {t('home.listEmptyComponent')}
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}