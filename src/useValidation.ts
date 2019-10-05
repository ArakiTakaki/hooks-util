import { useState, useCallback, ChangeEvent } from 'react'

export type TValidationPolysy = (value: string) => string;

export interface IFormItem {
  [key: string]: {
    value: string
    name: string
    validationList: Array<TValidationPolysy>
    errors: Array<string>
  },
}
const useValidation = (
  defaultForm: IFormItem
): [any, any, boolean] => {
  const [state, setState] = useState(defaultForm)
  let invalid = false;

  Object.keys(state).map(key => {
    state[key].validationList.forEach(value => {
      value(state[key].value);
    })
  })

  return [state, setState, invalid]
}

export default useValidation;
