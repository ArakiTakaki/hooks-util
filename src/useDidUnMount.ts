import { useEffect } from 'react'

export default (callback: () => void | undefined) => {
  useEffect(() => callback, [])
}
