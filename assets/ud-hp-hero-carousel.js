export function createCarouselFromSection(sectionId) {
  const section = document.getElementById(sectionId);
  const cursiveWord = section.querySelector('.js-cursive-word');
  const cursiveWordContainer = cursiveWord?.parentElement;
  const imageContainers = section.querySelectorAll('.js-carousel-image');

  if (imageContainers.length === 0) return;

  let currentIndex = 1;
  let prevIndex = 0;
  const totalImages = imageContainers.length;

  imageContainers.forEach((container, index) => {
    if (index === 0) {
      container.classList.add('is-previous');
    } else if (index === 1) {
      container.classList.add('is-current');
    } else {
      container.classList.add('is-inactive');
    }
  });

  setInterval(() => {
    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalImages;

    if (cursiveWordContainer) {
      const associatedWord = imageContainers[currentIndex].getAttribute('data-associated-word');
      if (associatedWord) {
        const originalText = cursiveWord.textContent;
        let removeIndex = originalText.length;

        const removeInterval = setInterval(() => {
          if (removeIndex >= 0) {
            cursiveWord.textContent = originalText.slice(0, removeIndex);
            removeIndex--;
          } else {
            clearInterval(removeInterval);

            let addIndex = 0;
            const addInterval = setInterval(() => {
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
    }, 500);
  }, 4000);
}
