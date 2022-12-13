import { Text, SafeAreaView } from 'react-native';

import useHomeScreen from './view.model';

const HomeScreen = () => {
  const { user, initializing } = useHomeScreen();
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
