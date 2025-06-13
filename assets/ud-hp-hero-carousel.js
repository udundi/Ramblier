export function createCarouselFromSection(sectionId) {
  const section = document.getElementById(sectionId);
  const cursiveWord = section.querySelector('.js-cursive-word');
  const cursiveWordContainer = cursiveWord?.parentElement;
  const buttonContainers = section.querySelectorAll('.js-carousel-button');
  const imageContainers = section.querySelectorAll('.js-carousel-image');

  if (imageContainers.length === 0) return;

  let currentIndex = window.innerWidth < 768 ? 0 : 1;
  let prevIndex = 0;
  const totalImages = imageContainers.length;
  let mainInterval;
  let removeInterval;
  let addInterval;

  imageContainers.forEach((container, index) => {
    if (index === currentIndex - 1) {
      container.classList.add('is-previous');
    } else if (index === currentIndex) {
      container.classList.add('is-current');
    } else {
      container.classList.add('is-inactive');
    }
  });

  buttonContainers.forEach((container, index) => {
    if (index === currentIndex) {
      container.classList.add('is-current');
    } else {
      container.classList.add('is-inactive');
    }
  });

  function startCarousel() {
    mainInterval = setInterval(() => {
      prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % totalImages;

      if (cursiveWordContainer) {
        const associatedWord = imageContainers[currentIndex].getAttribute('data-associated-word');
        if (associatedWord) {
          const originalText = cursiveWord.textContent;
          let removeIndex = originalText.length;

          removeInterval = setInterval(() => {
            if (removeIndex >= 0) {
              cursiveWord.textContent = originalText.slice(0, removeIndex);
              removeIndex--;
            } else {
              clearInterval(removeInterval);
              cursiveWord.textContent = '';

              let addIndex = 0;
              addInterval = setInterval(() => {
                if (addIndex < associatedWord.length) {
                  cursiveWord.textContent += associatedWord[addIndex];
                  addIndex++;
                } else {
                  clearInterval(addInterval);
                }
              }, 75);
            }
          }, 75);
        }
      }

      setTimeout(() => {
        imageContainers.forEach((container, index) => {
          container.classList.remove('is-current', 'is-previous');

          if (index === prevIndex) {
            container.classList.remove('is-inactive');
            container.classList.add('is-previous');
          } else if (index === currentIndex) {
            container.classList.remove('is-inactive');
            container.classList.add('is-current');
          } else {
            container.classList.add('is-inactive');
          }
        });

        buttonContainers.forEach((button, index) => {
          button.classList.remove('is-current');

          if (index === currentIndex) {
            button.classList.remove('is-inactive');
            button.classList.add('is-current');
          } else {
            button.classList.add('is-inactive');
          }
        });
      }, 500);
    }, 4000);
  }

  function pause() {
    clearInterval(mainInterval);
    clearInterval(removeInterval);
    clearInterval(addInterval);
  }

  function resume() {
    pause();
    startCarousel();
  }

  startCarousel();

  return { pause, resume };
}
