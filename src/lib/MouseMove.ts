type onMoveEvent = (cursor: { x: number; y: number }) => void;

class MouseMove {
  /* カーソル実態位置 */
  public px = 0;

  public py = 0;

  /* カーソル移動開始位置 */
  public sx = 0;

  public sy = 0;

  /* カーソル移動終了位置 */
  public ex = 0;

  public ey = 0;

  public isDrag = false;

  public onMove: onMoveEvent | null = null;

  constructor() {
    this.onMoveHandle = this.onMoveHandle.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);

    document.addEventListener('mousedown', e => {
      this.sx = e.clientX / window.innerWidth;
      this.sy = e.clientY / window.innerHeight;
      this.onStart();
    });

    document.addEventListener('touchstart', e => {
      const touch = e.changedTouches[0];
      this.sx = touch.clientX / window.innerWidth;
      this.sy = touch.clientY / window.innerHeight;
      this.onStart();
    });

    document.addEventListener('mouseup', this.onEnd);
    document.addEventListener('touchend', this.onEnd);

    document.addEventListener('mousemove', e => {
      this.onMoveHandle({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    });

    document.addEventListener('touchmove', e => {
      const touch = e.changedTouches[0];
      const x = touch.clientX / window.innerWidth;
      const y = touch.clientY / window.innerHeight;
      this.onMoveHandle({ x, y });
    });
  }

  public addEventOnMove(onMove: (cursor: { x: number; y: number }) => void) {
    this.onMove = onMove;
  }

  public deleteEventOnMove() {
    this.onMove = null;
  }

  public onMoveHandle(moveEvent: { x: number; y: number }) {
    if (this.onMove && this.isDrag) {
      const { x, y } = moveEvent;
      this.px = x - this.sx + this.ex;
      this.py = y - this.sy + this.ey;
      this.onMove({
        x: this.px,
        y: this.py,
      });
    }
  }

  public onStart() {
    this.isDrag = true;
  }

  public onEnd() {
    this.isDrag = false;
    this.ex = this.px;
    this.ey = this.py;
  }
}

export default new MouseMove();
