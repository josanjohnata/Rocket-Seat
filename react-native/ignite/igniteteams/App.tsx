import theme from '@theme/index';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import { Groups } from 'src/Screens/Groups';
import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { NewGroup } from 'src/Screens/NewGroup';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}

