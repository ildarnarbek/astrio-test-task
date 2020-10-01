let bannerFunction = () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const lastIndex = slides.length - 1;
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const unselectCurrentSlide = () => {
    slides[currentSlide].classList.remove("selected");
  };

  const selectSlide = (index) => {
    slides[index].classList.add("selected");
  };

  const showNextSlide = () => {
    unselectCurrentSlide();
    selectSlide(currentSlide + 1);
    currentSlide++;
  };

  const showFirstSlide = () => {
    selectSlide(0);
    unselectCurrentSlide();
    currentSlide = 0;
  };

  const showPrevSlide = () => {
    selectSlide(currentSlide - 1);
    unselectCurrentSlide();
    currentSlide--;
  };

  const showLastSlide = () => {
    selectSlide(lastIndex);
    unselectCurrentSlide();
    currentSlide = lastIndex;
  };

  const nextSlide = () => {
    currentSlide === lastIndex ? showFirstSlide() : showNextSlide();
  };

  const prevSlide = () => {
    currentSlide === 0 ? showLastSlide() : showPrevSlide();
  };

  leftArrow.onclick = prevSlide;
  rightArrow.onclick = nextSlide;
};

bannerFunction();
