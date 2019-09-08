type onMoveEvent = (cursor: { x: number; y: number }) => void

class MouseMove {
  /* カーソル実態位置 */
  px = 0

  py = 0

  /* カーソル移動開始位置 */
  sx = 0

  sy = 0

  /* カーソル移動終了位置 */
  ex = 0

  ey = 0

  isDrag = false

  onMove: onMoveEvent | null = null

  constructor() {
    this.onMoveHandle = this.onMoveHandle.bind(this)
    this.onStart = this.onStart.bind(this)
    this.onEnd = this.onEnd.bind(this)

    document.addEventListener('mousedown', (e) => {
      this.sx = e.clientX / window.innerWidth
      this.sy = e.clientY / window.innerHeight
      this.onStart()
    })

    document.addEventListener('touchstart', (e) => {
      const touch = e.changedTouches[0]
      this.sx = touch.clientX / window.innerWidth
      this.sy = touch.clientY / window.innerHeight
      this.onStart()
    })

    document.addEventListener('mouseup', this.onEnd)
    document.addEventListener('touchend', this.onEnd)

    document.addEventListener('mousemove', (e) => {
      this.onMoveHandle({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    })

    document.addEventListener('touchmove', (e) => {
      const touch = e.changedTouches[0]
      const x = touch.clientX / window.innerWidth
      const y = touch.clientY / window.innerHeight
      this.onMoveHandle({ x, y })
    })
  }

  addEventOnMove(onMove: (cursor: { x: number; y: number }) => void) {
    this.onMove = onMove
  }

  deleteEventOnMove() {
    this.onMove = null
  }

  onMoveHandle(moveEvent: { x: number; y: number }) {
    if (this.onMove && this.isDrag) {
      const { x, y } = moveEvent
      this.px = x - this.sx + this.ex
      this.py = y - this.sy + this.ey
      this.onMove({
        x: this.px,
        y: this.py
      })
    }
  }

  onStart() {
    this.isDrag = true
  }

  onEnd() {
    this.isDrag = false
    this.ex = this.px
    this.ey = this.py
  }
}

export default new MouseMove()
