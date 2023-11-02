/* eslint-disable no-unused-vars */
import domContent from '../domContent';

function fancyScroll() {
  const fancyField = (function fancyField() {
    const firstContainer = document.createElement('div');
    const secondContainer = document.createElement('div');
    const fancyContainer = document.createElement('div');
    const fancyPart = document.createElement('div');

    fancyPart.classList.add('fancy-part');
    fancyContainer.classList.add('fancy-container');
    firstContainer.classList.add('first-container');
    secondContainer.classList.add('second-container');

    domContent.mainPage.appendChild(fancyPart);
    fancyPart.appendChild(fancyContainer);
    fancyContainer.appendChild(firstContainer);
    fancyContainer.appendChild(secondContainer);

    return { firstContainer, secondContainer };
  }());

  (function fancyInnerElements() {
    const firstTextContainer = document.createElement('p');
    const secondTextContainer = document.createElement('p');
    const thirdTextContainer = document.createElement('p');
    const textPanel = document.createElement('div');

    firstTextContainer.classList.add('first-text-container');
    secondTextContainer.classList.add('second-text-container');
    thirdTextContainer.classList.add('third-text-container');
    textPanel.classList.add('text-panel');

    firstTextContainer.innerText = 'Best Of Cyprus';
    secondTextContainer.innerText = 'Taste Of\n Aphrodite';
    thirdTextContainer.innerText = 'Lorem ipsum dolor,\n\n sit amet consectetur adipisicing elit.\n\nQuasi mollitia hic id temporibus\n\n praesentium deleniti reprehenderit\n\n quis ex ad, fugit minima vitae suscipit\n\n veritatis quo veniam eligendi at sed?';

    fancyField.firstContainer.appendChild(textPanel);
    textPanel.appendChild(firstTextContainer);
    textPanel.appendChild(secondTextContainer);
    textPanel.appendChild(thirdTextContainer);
  }());

  (function fancyPictureShadow() {
    const shadowField = document.createElement('div');

    shadowField.classList.add('fancy-picture-shadow');

    fancyField.secondContainer.appendChild(shadowField);
  }());

  (function fancyPictureElements() {
    const firstPicture = document.createElement('img');
    const secondPicture = document.createElement('img');
    const thirdPicture = document.createElement('img');
    const fourthPicture = document.createElement('img');

    firstPicture.src = '../foods/Calamari.jpg';
    secondPicture.src = '../foods/fishfilet.jpg';
    thirdPicture.src = '../foods/prawn.jpg';
    fourthPicture.src = '../foods/wine.jpg';

    fancyField.secondContainer.appendChild(firstPicture);
    fancyField.secondContainer.appendChild(secondPicture);
    fancyField.secondContainer.appendChild(thirdPicture);
    fancyField.secondContainer.appendChild(fourthPicture);
  }());
}

export default fancyScroll;
