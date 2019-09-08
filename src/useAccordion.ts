import { useState, useLayoutEffect } from 'react'

// アニメーションを行う際に、min-heightを固定し、overflow hiddenにする
// オープンさせる際はパラメータ全部消す
export default (el: HTMLElement, animationTiming: number) => {
  el.style.display = 'hidden'
  const open = useState(false)
  useLayoutEffect(() => {
    if (!open[0]) {
      const height = el.clientHeight
      el.style.maxHeight = `${height}px`
      el.style.transition = `${animationTiming}ms`
      el.style.overflow = 'hidden'
      el.style.maxHeight = '0px'
    } else {
    }
  }, [open[0]])

  return open
}
