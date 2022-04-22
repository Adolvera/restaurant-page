const loadMenu = () => {
  const mainDiv = document.createElement('div');
  const titleBorder = document.createElement('div');
  const titleDiv = document.createElement('div');
  const h1Title = document.createElement('h1');
  const menuBorder = document.createElement('div');
  const menuDiv = document.createElement('div');
  const menuGridDiv = document.createElement('div');

  const italianDiv = makeGridItem("img/italian-sub.jpg", '"Classic Italian"', "Loaded with turkey, pepperoni, salami, and banana peppers");
  const meatballDiv = makeGridItem("img/meatball-sub.jpg", '"The Meatball"', "Homemade meatballs flavored with tomato sauce, topped with cheese!");
  const hoagieDiv = makeGridItem("img/hoagie-sub.jpg", '"The Hoagie"', "Thinly sliced ham, salami, and Deli American combined with Italian dressing");
  const phillyDiv = makeGridItem("img/cheesesteak.jpeg", '"Philly Cheesesteak"', "Ribeye steak, melted provolone, and carmelized onions on a hoagie roll!");
  const chickenDiv = makeGridItem("img/chicken-wrap.jpg", "Chicken Wrap", "Choice of fried or grilled chicken, along with choice of vegetables and cheese");
  const spinachDiv = makeGridItem("img/spinach-wrap.jpg", "Spinach Wrap", "Turkey spinach wrap, including your choice of vegetables and cheese");

  mainDiv.id = "main-content";
  mainDiv.classList.add('flex');

  titleBorder.id = "menu-title-border";
  titleBorder.classList.add('border');
  titleDiv.id = "menu-title";
  titleDiv.classList.add('section');
  h1Title.textContent = "Menu";

  menuBorder.id = "menu-border";
  menuBorder.classList.add('border');
  menuDiv.id = "menu-main";
  menuDiv.classList.add('section');
  menuGridDiv.id = "menu-grid";

  titleDiv.appendChild(h1Title);
  titleBorder.appendChild(titleDiv);

  menuGridDiv.appendChild(italianDiv);
  menuGridDiv.appendChild(meatballDiv);
  menuGridDiv.appendChild(hoagieDiv);
  menuGridDiv.appendChild(phillyDiv);
  menuGridDiv.appendChild(chickenDiv);
  menuGridDiv.appendChild(spinachDiv);

  menuDiv.appendChild(menuGridDiv);
  menuBorder.appendChild(menuDiv);

  mainDiv.appendChild(titleBorder);
  mainDiv.appendChild(menuBorder);

  return mainDiv;
}

const makeGridItem = (source, title, string) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const para = document.createElement('p');

  div.classList.add('grid-item');

  img.src = source;
  h2.textContent = title;
  para.textContent = string;

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(para);

  return div;
}

module.exports = {
  loadMenu
}