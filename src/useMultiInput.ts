import { useState, useCallback, ChangeEvent, ChangeEventHandler } from 'react';

export interface UseMultiInput {
  value: string;
  name: string;
}
const useMultiInput = (initialState: UseMultiInput[]): [UseMultiInput[], ChangeEventHandler] => {
  const [values, setValues] = useState(initialState);

  const changeEvent = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const map = values.map(value => {
        if (value.name === e.currentTarget.name) {
          return {
            name: e.currentTarget.name,
            value: e.currentTarget.value,
          };
        } else {
          return value;
        }
      });
      setValues(map);
    },
    [values]
  );

  return [values, changeEvent];
};

export default useMultiInput;
