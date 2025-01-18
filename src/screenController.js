const changePointerFactory = function changePointerFactory(cursorType) {
  return (element) => {
    element.style.cursor = cursorType;
  };
};

class ScreenController {
  #SlideController;

  #leftArrow = document.querySelector(".left-arrow");

  #rightArrow = document.querySelector(".right-arrow");

  #slideBubbles = document.querySelectorAll(".slide-bubble");

  constructor(SlideControllerObject = {}) {
    this.#SlideController = SlideControllerObject;
  }

  #addPointerCursor = changePointerFactory("pointer");

  #addLeftArrowClickHanlder() {
    this.#addPointerCursor(this.#leftArrow);
    this.#leftArrow.addEventListener(
      "click",
      this.#SlideController.changePreviousSlide,
    );
  }

  #addRightArrowClickHandler() {
    this.#addPointerCursor(this.#rightArrow);
    this.#rightArrow.addEventListener(
      "click",
      this.#SlideController.changeNextSlide,
    );
  }

  #addSlideBubbleClickHandler() {
    this.#slideBubbles.forEach((slideBubble) => {
      this.#addPointerCursor(slideBubble);
      slideBubble.addEventListener("click", (event) => {
        const bubbleIndex = Number(event.target.dataset.index);
        this.#SlideController.changeSlide(bubbleIndex);
      });
    });
  }

  activateScreenController() {
    this.#addLeftArrowClickHanlder();
    this.#addRightArrowClickHandler();
    this.#SlideController.showCurrentSlide();
    this.#SlideController.showCurrentSlideBubble();
    this.#SlideController.changeSlideAuto();
    this.#addSlideBubbleClickHandler();
  }
}

export default ScreenController;
