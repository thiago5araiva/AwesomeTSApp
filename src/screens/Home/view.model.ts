import { useEffect, useState } from 'react';
import Firebase from '@react-native-firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
type TUser = FirebaseAuthTypes.User | null;
type TUseHomeScreen = {
  initializing: boolean;
  user: TUser;
};
const useHomeScreen = (): TUseHomeScreen => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<TUser>(null);

  const onAuthStateChanged = (user: TUser) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return { initializing, user };
};

export default useHomeScreen;
