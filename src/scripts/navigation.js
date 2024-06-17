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


/////////////////////////////////////////////////////////////////////////////////

//import { cardData } from "./data";

// Event listener para el DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  let ctrl = [];
  const buttons = document.querySelectorAll('[title]');
  const buttons1 = document.getElementById('[id-url]');
  //console.log(buttons1)
  const resultValue = buttons.forEach(button => {
    button.addEventListener('click', function() {
      //const url = this.getAttribute();
      //handleButtonClick(url);
      //return url
    });
    ctrl.push(button.id);
    // console.log(button)
  });
  console.log(ctrl)
  console.log(buttons[1])
  //console.log(resultValue)
  // handleButtonClick(button.id);
  initMainMenu();
  initSecondMenu();
});


// Función para inicializar el menú principal
function initMainMenu() {
  const photoCardDiv = document.getElementById('photo-card');
  document.getElementById('cardMenu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[0].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
    <p class="text-justify text-base">${cardData[0].description}</p>
  `;
}

// Función para actualizar el menú principal
function updateMainMenu(url) {
  document.getElementById('cardMenu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[url].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
    <p class="text-justify text-base">${cardData[url].description}</p>
  `;
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
        };
          
// Función para actualizar el segundo menú
function updateSecondMenu(url) {
  document.getElementById('second-menu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[url].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
    <p class="text-justify text-base">${cardData[url].menuDescription}</p>
  `;
}

// Función para inicializar el segundo menú
function initSecondMenu() {
  document.getElementById('second-menu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[0].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
    <p class="text-justify text-base">${cardData[0].menuDescription}</p>
  `;
}


// Función para manejar los eventos de clic en los botones
function handleButtonClick(url) {
  const photoCardDiv = document.getElementById('photo-card');
  // Lógica para cambiar la clase del div de la foto
  // Actualiza el menú principal y el segundo menú
  updateMainMenu(url);
  updateSecondMenu(url);
}




// document.addEventListener('DOMContentLoaded', function() {
  
//   const buttons = document.querySelectorAll('[title]');
//   const photoCardDiv = document.getElementById('photo-card');

//   document.getElementById('cardMenu').innerHTML = `
//           <h2 class="font-bold text-xl">${cardData[0].title}</h2>
//           <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
//           <p class="text-justify text-base">${cardData[0].description}</p>
//         `;
      
//   document.getElementById('second-menu').innerHTML = `
//         <h2 class="font-bold text-xl">${cardData[0].title}</h2>
//         <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
//         <p class="text-justify text-base">${cardData[0].menuDescription}</p>
//       `;

//   buttons.forEach(button => {
//     button.addEventListener('click', function() {
//       const url = this.getAttribute('id-url');

//       switch (url) {
//         case "0":
//           photoCardDiv.classList.remove('bg-experience-img');
//           photoCardDiv.classList.remove('bg-projects-img');
//           photoCardDiv.classList.remove('bg-skills-img');
//           photoCardDiv.classList.add('bg-profile-img');
//           break;
//         case "1":
//           photoCardDiv.classList.remove('bg-experience-img');
//           photoCardDiv.classList.remove('bg-profile-img');
//           photoCardDiv.classList.remove('bg-skills-img');
//           photoCardDiv.classList.add('bg-projects-img');
//           break;
//         case "2":
//           photoCardDiv.classList.remove('bg-profile-img');
//           photoCardDiv.classList.remove('bg-projects-img');
//           photoCardDiv.classList.remove('bg-skills-img');
//           photoCardDiv.classList.add('bg-experience-img');
//           break;
//         case "3":
//           photoCardDiv.classList.remove('bg-experience-img');
//           photoCardDiv.classList.remove('bg-projects-img');
//           photoCardDiv.classList.remove('bg-profile-img');
//           photoCardDiv.classList.add('bg-skills-img');
//           break;
//       }

//       document.getElementById('cardMenu').innerHTML = `
//           <h2 class="font-bold text-xl">${cardData[url].title}</h2>
//           <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
//           <p class="text-justify text-base">${cardData[url].description}</p>
//         `;
      
//       document.getElementById('second-menu').innerHTML = `
//         <h2 class="font-bold text-xl">${cardData[url].title}</h2>
//         <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
//         <p class="text-justify text-base">${cardData[url].menuDescription}</p>
//       `;
//     });
//   });
// });
/**
// Importa los datos necesarios
import { cardData } from "./data";

// Función para inicializar el menú principal
function initMainMenu() {
  const photoCardDiv = document.getElementById('photo-card');
  document.getElementById('cardMenu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[0].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
    <p class="text-justify text-base">${cardData[0].description}</p>
  `;
}

// Función para actualizar el menú principal
function updateMainMenu(url) {
  document.getElementById('cardMenu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[url].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
    <p class="text-justify text-base">${cardData[url].description}</p>
  `;
}

// Función para inicializar el segundo menú
function initSecondMenu() {
  document.getElementById('second-menu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[0].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
    <p class="text-justify text-base">${cardData[0].menuDescription}</p>
  `;
}

// Función para actualizar el segundo menú
function updateSecondMenu(url) {
  document.getElementById('second-menu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[url].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
    <p class="text-justify text-base">${cardData[url].menuDescription}</p>
  `;
}

// Función para manejar los eventos de clic en los botones
function handleButtonClick(url) {
  const photoCardDiv = document.getElementById('photo-card');
  // Lógica para cambiar la clase del div de la foto
  // Actualiza el menú principal y el segundo menú
  updateMainMenu(url);
  updateSecondMenu(url);
}

// Event listener para el DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[title]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('id-url');
      handleButtonClick(url);
    });
  });
  initMainMenu();
  initSecondMenu();
});
*/



/**
 * // Importa los datos necesarios
import { cardData } from "./data";

// Función para inicializar el menú principal
function initMainMenu() {
  const photoCardDiv = document.getElementById('photo-card');
  document.getElementById('cardMenu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[0].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
    <p class="text-justify text-base">${cardData[0].description}</p>
  `;
}

// Función para actualizar el menú principal
function updateMainMenu(url) {
  document.getElementById('cardMenu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[url].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
    <p class="text-justify text-base">${cardData[url].description}</p>
  `;
}

// Función para inicializar el segundo menú
function initSecondMenu() {
  document.getElementById('second-menu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[0].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[0].subtitle}</h3>
    <p class="text-justify text-base">${cardData[0].menuDescription}</p>
  `;
}

// Función para actualizar el segundo menú
function updateSecondMenu(url) {
  document.getElementById('second-menu').innerHTML = `
    <h2 class="font-bold text-xl">${cardData[url].title}</h2>
    <h3 class="font-semibold text-lg">${cardData[url].subtitle}</h3>
    <p class="text-justify text-base">${cardData[url].menuDescription}</p>
  `;
}

// Función para manejar los eventos de clic en los botones
function handleButtonClick(url) {
  const photoCardDiv = document.getElementById('photo-card');
  // Lógica para cambiar la clase del div de la foto
  // Actualiza el menú principal y el segundo menú
  updateMainMenu(url);
  updateSecondMenu(url);
}

// Event listener para el DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[title]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('id-url');
      handleButtonClick(url);
    });
  });
  initMainMenu();
  initSecondMenu();
});
 * 
 */