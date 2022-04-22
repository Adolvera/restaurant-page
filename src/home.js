const loadHome = () => {
  const containerDiv = document.createElement('div');
  const mainDiv = document.createElement('div');
  const promoBorder = document.createElement('div');
  const promoDiv = document.createElement('div');
  const promoPara = document.createElement('p');
  const authorPara = document.createElement('p');
  const locationBorder = document.createElement('div');
  const locationDiv = document.createElement('div');
  const locationTitle = document.createElement('h2');
  const locationPara = document.createElement('p');
  const hourBorder = document.createElement('div');
  const hourDiv = document.createElement('div');
  const hourTitle = document.createElement('h2');

  const mondayPara = document.createElement('p');
  const tuesdayPara = document.createElement('p');
  const wednesdayPara = document.createElement('p');
  const thursdayPara = document.createElement('p');
  const fridayPara = document.createElement('p');
  const saturdayPara = document.createElement('p');
  const sundayPara = document.createElement('p');

  const imgGroup = document.createElement('img');
  const imgMap = document.createElement('img');
  imgGroup.id = "group-photo";
  imgGroup.src = 'img/restaurant-group.jpg';
  imgMap.id = "map-photo";
  imgMap.src = 'img/restaurant-map.PNG';

  containerDiv.classList.add('flex');
  mainDiv.id = "main-content";
  mainDiv.classList.add('flex');

  promoBorder.classList.add('border');
  promoBorder.id = 'promo-border';
  promoDiv.id = 'promo';
  promoDiv.classList.add('section');

  locationBorder.classList.add('border');
  locationDiv.id = 'location';
  locationDiv.classList.add('section')
  locationDiv.classList.add('flex');

  hourBorder.id = 'hour-border'
  hourBorder.classList.add('border');
  hourDiv.id = 'hours';
  hourDiv.classList.add('section');
  hourDiv.classList.add('flex');

  promoPara.textContent = "'Eddie's has the best subs east of the Mississippi! With natural ingredients, a wide selection of subs to choose from, and a cute and cozy interior for those wanting to stay and cherish the moment, Eddie's can be a home away from home. No matter the day or weather, Eddie's is always only a call away for a good lunch or dinner! Place your to go order or visit Eddie's Subs today!'";
  authorPara.textContent = "-Eddie Sandwich";

  promoDiv.appendChild(promoPara);
  promoDiv.appendChild(authorPara);
  promoBorder.appendChild(promoDiv);

  locationTitle.textContent = "Location";
  locationPara.textContent = "123 N. Paddybottoms Street, Albany, New York";

  locationDiv.appendChild(locationTitle);
  locationDiv.appendChild(locationPara);
  locationBorder.appendChild(locationDiv);

  hourTitle.textContent = "Hours of Operation";
  sundayPara.textContent = "Sunday: 9am - 5pm";
  mondayPara.textContent = "Monday: 6am - 8pm";
  tuesdayPara.textContent = "Tuesday: 6am - 8pm";
  wednesdayPara.textContent = "Wednesday: 6am - 8pm";
  thursdayPara.textContent = "Thursday: 6am - 8pm";
  fridayPara.textContent = "Friday: 6am - 12am";
  saturdayPara.textContent = "Saturday: 6am - 12am";

  hourDiv.appendChild(hourTitle);
  hourDiv.appendChild(sundayPara);
  hourDiv.appendChild(mondayPara);
  hourDiv.appendChild(tuesdayPara);
  hourDiv.appendChild(wednesdayPara);
  hourDiv.appendChild(thursdayPara);
  hourDiv.appendChild(fridayPara);
  hourDiv.appendChild(saturdayPara);
  hourBorder.appendChild(hourDiv);

  mainDiv.appendChild(promoBorder);
  mainDiv.appendChild(imgGroup);
  mainDiv.appendChild(locationBorder);
  mainDiv.appendChild(imgMap);
  mainDiv.appendChild(hourBorder);

  containerDiv.appendChild(mainDiv);

  return containerDiv;
}

module.exports = {
  loadHome
}