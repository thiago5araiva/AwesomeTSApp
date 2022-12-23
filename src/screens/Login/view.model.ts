import {useState} from 'react';

const useLoginScreen = () => {
  const [state, setState] = useState();
  return {state};
};

export default useLoginScreen;
