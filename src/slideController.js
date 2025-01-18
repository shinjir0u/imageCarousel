class SlideController {
  #slideImages;

  #currentSlideIndex = 0;

  #currentSlideElement;

  #numberOfSlides;

  #slideBubbles = document.querySelectorAll(".slide-bubble");

  #currentSlideBubble;

  constructor() {
    this.#slideImages = [...document.querySelectorAll(".slide-image")];
    this.#numberOfSlides = this.#slideImages.length;
    this.#currentSlideElement = this.#slideImages[this.#currentSlideIndex];
    this.#currentSlideBubble = this.#slideBubbles[this.#currentSlideIndex];
  }

  #setCurrentSlideIndex(indexToSet) {
    if (indexToSet < 0) this.#currentSlideIndex = this.#numberOfSlides - 1;
    else if (indexToSet >= this.#numberOfSlides) this.#currentSlideIndex = 0;
    else this.#currentSlideIndex = indexToSet;
  }

  showCurrentSlide() {
    this.#currentSlideElement.style.order = -1;
  }

  showCurrentSlideBubble() {
    this.#currentSlideBubble.classList.remove("active");

    this.#currentSlideBubble = this.#slideBubbles[this.#currentSlideIndex];
    this.#currentSlideBubble.classList.add("active");
  }

  changeSlide(slideIndexToChange) {
    this.#currentSlideElement.style.order = 0;
    this.#setCurrentSlideIndex(slideIndexToChange);
    this.#currentSlideElement = this.#slideImages[this.#currentSlideIndex];
    this.showCurrentSlide();
    this.showCurrentSlideBubble();
  }

  changeNextSlide = () => {
    this.changeSlide(this.#currentSlideIndex + 1);
  };

  changePreviousSlide = () => {
    this.changeSlide(this.#currentSlideIndex - 1);
  };

  changeSlideAuto() {
    setInterval(this.changeNextSlide, 1500);
  }
}

export default SlideController;

/* Pseudocode
CREATE class SlideController
    CREATE private variable currentSlideIndex, currentSlideElement, numberOfSlides, slideImages
    CREATE function showCurrentSlide
        ADD order property to the currentSlideElement

    CREATE function changeSlide factory function
        SET currentSlideElement as previousSlideElement
        REMOVE order property on previousSlideElement
        SET plus or minus current index depending on the paramenter index
        CALL showCurrentSlide
*/
