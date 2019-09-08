import { useState } from 'react'
import MouseMove from './lib/MouseMove'
import useDidMount from './useDidMount'
import useDidUnMount from './useDidUnMount'

export const useMouseVector = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useDidMount(() => {
    MouseMove.addEventOnMove((event) => {
      setMouse(event)
    })
  })

  useDidUnMount(() => {
    MouseMove.deleteEventOnMove()
  })

  return mouse
}
