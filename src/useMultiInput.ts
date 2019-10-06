import { useReducer, useCallback, ChangeEvent, ChangeEventHandler } from 'react';
import { TOnChange } from './interfaces';

export default (initialState: {[key:string]: string} ):[{[key:string]: string}, ChangeEventHandler] => {
  const [valueMap, setValueMap] = useState(initialState);

  const changeEvent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const map = { [e.currentTarget.name: e.currentTarget.value] };
    setValueMap({ ...valueMap, ...map });
  }, [valueMap]);

  return [valueMap, changeEvent];
}
