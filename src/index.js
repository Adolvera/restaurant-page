const { loadHome } = require('./home');
const { loadHeader } = require('./header');
const { loadMenu } = require('./menu');
const { loadContact } = require('./contact');

const contentDiv = document.querySelector('#content');
const headerObject = loadHeader();
const homeDiv = loadHome();
const menuDiv = loadMenu();
const contactDiv = loadContact();

headerObject.menuButton.addEventListener('click', () => checkToggle(headerObject.menuButton));
headerObject.homeButton.addEventListener('click', () => checkToggle(headerObject.homeButton));
headerObject.contactButton.addEventListener('click', () => checkToggle(headerObject.contactButton));

const checkToggle = (button) => {
  if (headerObject.homeButton.disabled === true) {
    headerObject.homeButton.disabled = false;
    headerObject.homeButton.classList.remove('on');
    contentDiv.removeChild(homeDiv);
  }
  
  if (headerObject.menuButton.disabled === true) {
    headerObject.menuButton.disabled = false;
    headerObject.menuButton.classList.remove('on');
    contentDiv.removeChild(menuDiv);
  }

  if (headerObject.contactButton.disabled === true) {
    headerObject.contactButton.disabled = false;
    headerObject.contactButton.classList.remove('on');
    contentDiv.removeChild(contactDiv);
  }

  if (button === headerObject.homeButton) {
    contentDiv.appendChild(homeDiv);
    headerObject.homeButton.classList.add('on');
    headerObject.homeButton.disabled = true;
  }

  if (button === headerObject.menuButton) {
    contentDiv.appendChild(menuDiv);
    headerObject.menuButton.classList.add('on');
    headerObject.menuButton.disabled = true;
  }

  if (button === headerObject.contactButton) {
    contentDiv.appendChild(contactDiv);
    headerObject.contactButton.classList.add('on');
    headerObject.contactButton.disabled = true;
  }
}

contentDiv.appendChild(headerObject.header);
contentDiv.appendChild(homeDiv);