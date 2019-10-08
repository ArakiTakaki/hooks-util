import { useState, useCallback } from 'react';

const useToggle = (defaultState: boolean = false): [boolean, (bool?: boolean) => void] => {
  const [is, setIs] = useState<boolean>(defaultState);

  const onToggle = useCallback((bool: boolean = !is) => {
    setIs(bool);
  }, [is]);

  return [
    is,
    onToggle
  ];
};

export default useToggle;
