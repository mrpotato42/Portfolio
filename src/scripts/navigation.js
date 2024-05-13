import { cardData } from "./data";

document.addEventListener('DOMContentLoaded', function() {
  
  const buttons = document.querySelectorAll('[title]');
  const photoCardDiv = document.getElementById('photo-card');

  document.getElementById('cardMenu').innerHTML = `
          <h2 class="font-bold text-xl">${cardData[0].title}</h2>
          <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
          <p class="text-justify text-base">${cardData[0].description}</p>
        `;
      
  document.getElementById('second-menu').innerHTML = `
        <h2 class="font-bold text-xl">${cardData[0].title}</h2>
        <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
        <p class="text-justify text-base">${cardData[0].menuDescription}</p>
      `;

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('id-url');

      switch (url) {
        case "0":
          photoCardDiv.classList.remove('bg-experience-img');
          photoCardDiv.classList.remove('bg-projects-img');
          photoCardDiv.classList.remove('bg-skills-img');
          photoCardDiv.classList.add('bg-profile-img');
          break;
        case "1":
          photoCardDiv.classList.remove('bg-experience-img');
          photoCardDiv.classList.remove('bg-profile-img');
          photoCardDiv.classList.remove('bg-skills-img');
          photoCardDiv.classList.add('bg-projects-img');
          break;
        case "2":
          photoCardDiv.classList.remove('bg-profile-img');
          photoCardDiv.classList.remove('bg-projects-img');
          photoCardDiv.classList.remove('bg-skills-img');
          photoCardDiv.classList.add('bg-experience-img');
          break;
        case "3":
          photoCardDiv.classList.remove('bg-experience-img');
          photoCardDiv.classList.remove('bg-projects-img');
          photoCardDiv.classList.remove('bg-profile-img');
          photoCardDiv.classList.add('bg-skills-img');
          break;
      }

      document.getElementById('cardMenu').innerHTML = `
          <h2 class="font-bold text-xl">${cardData[url].title}</h2>
          <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
          <p class="text-justify text-base">${cardData[url].description}</p>
        `;
      
      document.getElementById('second-menu').innerHTML = `
        <h2 class="font-bold text-xl">${cardData[url].title}</h2>
        <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
        <p class="text-justify text-base">${cardData[url].menuDescription}</p>
      `;
    });
  });
});