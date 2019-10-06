import { useEffect } from 'react';

const useDidUnMount = (callback: () => void | undefined) => {
  useEffect(() => callback, []);
};

export default useDidUnMount;
