import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '../Screens/Groups';
import { Players } from '../Screens/Players';
import { NewGroup } from '../Screens/NewGroup';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="groups"
        component={Groups}
      />
      <Screen
        name="players"
        component={Players}
      />
      <Screen
        name="newGroup"
        component={NewGroup}
      />
    </Navigator>
  );
};
