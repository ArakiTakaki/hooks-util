import { useState } from 'react';

const useToggle = (defaultState: boolean = false): [boolean, () => void] => {
  const [is, onToggle] = useState<boolean>(defaultState);
  return [
    is,
    () => {
      onToggle(!is);
    },
  ];
};

export default useToggle;
