import { useState } from 'react'

export default (defaultState: boolean = false): [boolean, () => void] => {
  const [is, onToggle] = useState<boolean>(defaultState)
  return [
    is,
    () => {
      onToggle(!is)
    }
  ]
}
