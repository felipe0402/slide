export default class slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove");
  }
  onMove(event) {}
  onEnd() {
    this.wrapper.removeEventListener("mousemove".onMove);
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }
  bindEvent() {
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onStart = this.onStart.bind(this);
  }

  init() {
    this.addSlideEvent();
    return this;
  }
}
