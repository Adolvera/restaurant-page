const loadContact = () => {
  const mainDiv = document.createElement('div');
  const titleBorder = document.createElement('div');
  const titleDiv = document.createElement('div');
  const h1Title = document.createElement('h1');
  const restaurantContact = makeContact("./img/restaurant-contact.jpg", "Eddie's Subs", "Tel: 123-456-2097", "Email: eddiessubs@gmail.com");
  const gusContact = makeContact("./img/gus-manager.jpg", "Gus Fring (Owner)", "Tel: 345-134-2521", "Email: polloloco@gmail.com");
  const saulContact = makeContact("./img/saul-owner.jpg", "Saul Goodman (Manager)", "Tel: 524-241-1525", "Email: itsallgoodman@gmail.com");

  mainDiv.id = "main-content";
  mainDiv.classList.add('flex');

  titleBorder.id = "contact-title-border";
  titleBorder.classList.add('border');
  titleDiv.id = "contact-title";
  titleDiv.classList.add('section');
  h1Title.textContent = "Contact Us";

  titleDiv.appendChild(h1Title);
  titleBorder.appendChild(titleDiv);

  mainDiv.appendChild(titleBorder);
  mainDiv.appendChild(restaurantContact);
  mainDiv.appendChild(gusContact);
  mainDiv.appendChild(saulContact);

  return mainDiv;
}

const makeContact = (source, name, phone, email) => {
  const borderDiv = document.createElement('div');
  const contactDiv = document.createElement('div');
  const img = document.createElement('img');
  const infoDiv = document.createElement('div');
  const nameTitle = document.createElement('h1');
  const phonePara = document.createElement('p');
  const emailPara = document.createElement('p');

  borderDiv.classList.add('border');
  borderDiv.classList.add('contact-border');
  contactDiv.classList.add('section');
  contactDiv.classList.add('contact');

  img.src = source;
  infoDiv.classList.add('info');

  nameTitle.textContent = name;
  phonePara.textContent = phone;
  emailPara.textContent = email;

  infoDiv.appendChild(nameTitle);
  infoDiv.appendChild(phonePara);
  infoDiv.appendChild(emailPara);
  contactDiv.appendChild(img);
  contactDiv.appendChild(infoDiv);
  borderDiv.appendChild(contactDiv);

  return borderDiv;
}

module.exports = {
  loadContact
}