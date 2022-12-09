import {useState} from 'react';

const useHomeScreen = () => {
  const [state, setState] = useState<boolean>(false);
  return {state};
};

export default useHomeScreen;
