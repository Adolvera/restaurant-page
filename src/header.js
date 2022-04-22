const loadHeader = () => {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const div = document.createElement('div');
  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');

  header.classList.add('flex');
  title.textContent = "Eddie's Subs";
  div.id = "tabs";
  homeButton.id = "home";
  menuButton.id = "menu";
  contactButton.id = "contact";

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact Us";
  homeButton.classList.add('on');
  homeButton.disabled = true;

  div.appendChild(homeButton);
  div.appendChild(menuButton);
  div.appendChild(contactButton);

  header.appendChild(title);
  header.appendChild(div);

  return {
    header,
    homeButton,
    menuButton,
    contactButton
  };
}

module.exports = {
  loadHeader
}