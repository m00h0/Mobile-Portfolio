/* eslint-disable linebreak-style */
const hamburgar = document.querySelector('.hamburgar');
const navmenu = document.querySelector('.nav-menu');
hamburgar.addEventListener('click', () => {
  hamburgar.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgar.classList.remove('active');
  navmenu.classList.remove('active');
}));

const projects = [
  {
    id: 1,
    title: 'Awesome Books',
    snapshot: './images/assets/awesomeBooks.png',
    description: 'The project Awesome Books is a page app for managing books from a website. It is built using JavaScript, CSS, and HTML.',
    skills: ['CSS', 'JavaScript', 'HTML', 'Gitflow'],
    projectInfo: { company: 'Microverse', role: 'Front END Dev', year: 2023 },
    supdescription: 'Awesome Books',
    seeLive: 'https://m00h0.github.io/Awesome-books/',
    seeSource: 'https://github.com/m00h0/Awesome-books',
  },

  {
    id: 2,
    title: 'Ted Event',
    snapshot: './images/assets/tedEvents.png',
    description: 'The TED Capstone Project is a responsive website designed to showcase a TED-like event. It includes features such as speaker profiles, event schedules, and session details, providing users with an interactive experience similar to attending a TED conference.',
    skills: ['CSS', 'JavaScript', 'HTML', 'API Design'],
    projectInfo: { company: 'Microverse', role: 'front END Dev', year: 2025 },
    supdescription: 'Ted Event',
    seeLive: 'https://m00h0.github.io/Microverse-Capstone-1/index.html',
    seeSource: 'https://github.com/m00h0/Microverse-Capstone-1',
  },

  {
    id: 3,
    title: 'Picture In Picture',
    snapshot: './images/assets/pictureInPicture.png',
    description: 'This project allows users to select a media stream from their screen and display it in a Picture-in-Picture (PiP) window. It is built using HTML, CSS, and JavaScript.',
    skills: ['CSS', 'JavaScript', 'HTML', 'API Design'],
    projectInfo: { company: 'Microverse', role: 'front END Dev', year: 2025 },
    supdescription: 'Picture In Picture',
    seeLive: 'https://m00h0.github.io/picture-in-picture/',
    seeSource: 'https://github.com/m00h0/picture-in-picture',
  },

  {
    id: 4,
    title: 'Quote Generator',
    snapshot: './images/assets/quoteGenerator.png',
    skills: ['CSS', 'JavaScript', 'HTML', 'API Design'],
    projectInfo: { company: 'Microverse', role: 'Front END Dev', year: 2024 },
    supdescription: 'Quote Generator',
    description: 'This project is a Quote Generator that displays random quotes to inspire and motivate users. The application fetches quotes from an API and presents them in a user-friendly interface.',
    seeLive: 'https://m00h0.github.io/Quote-Generator/',
    seeSource: 'https://github.com/m00h0/Quote-Generator',
  },

  {
    id: 5,
    title: 'SEA STAR Catch & Grill',
    snapshot: './images/assets/seaStarFood.png',
    description: 'is a restaurant website designed to showcase the offerings of the Sea Star Catch & Grill restaurant, Built using HTML, CSS, and JavaScript, the project provides an engaging and informative online presence for the restaurant, featuring key information about the menu, services, and contact details.',
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    supdescription: 'SEA STAR Catch & Grill',
    projectInfo: { company: 'Microverse', role: 'Front END Dev', year: 2023 },
    seeLive: 'https://m00h0.github.io/Capstone-Project2/dist/',
    seeSource: 'https://github.com/m00h0/Capstone-Project2',
  },

  {
    id: 6,
    title: 'Space Travelers Hub',
    snapshot: './images/assets/spaceTraveler.png',
    description: "The Space Travelers' Hub is a web application designed for a company that offers commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
    skills: ['CSS', 'JavaScript', 'HTML', 'react&redux'],
    supdescription: 'Space Travelers Hub',
    projectInfo: { company: 'Microverse', role: 'Front END Dev', year: 2023 },
    seeLive: 'https://react-group-capstone-qwsc.vercel.app/',
    seeSource: 'https://github.com/m00h0/space-traveler',
  },

];

projects.forEach((project) => {
  const bodySection = document.querySelector('.project-cards');
  const section = document.createElement('section');
  section.className = 'projects';
  section.innerHTML = `<div class=""project-cards">
  <img class="project-card" src=${project.snapshot} alt="Snap image for background">
  </div>
<div class="project-card-details">
  <h2 class="title">${project.title}</h2>
  
  <div class="stacks">
  <button class="stacks1" type="button" name="button">${project.skills[0]}</button>
  <button class="stacks1" type="button" name="button">${project.skills[1]}</button>
  <button class="stacks1" type="button" name="button">${project.skills[2]}</button>
  <button class="stacks1" type="button" name="button">${project.skills[3]}</button>
  </div>
  
  <div class="action-btn-container">
  <button class="green-button" type="button" id="btn-${project.id}" name="button">See project</button>
  
  </div>
</div>
`;

  bodySection.append(section);
});
const body = document.querySelector('section');
projects.forEach((project) => {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';
  popupWindow.id = `card-${project.id}`;
  popupWindow.innerHTML = `
  <section class="project-card">
  <div class="pop-header">
      
      <i id="close-${project.id}" class="bi bi-x close-icon"></i>
  </div>
  
      <div class="portfolio-popup-image">
        <img class="popup-image" src="${project.snapshot}" alt="Snap image for background">
      </div>
      <div class="popup-left-block">
      <h2 class="title">${project.supdescription}</h2>
      
        
        <div class="card-buttons">
        <div class="card-btn btn-popup">
          <button class="sm-btn" type="button" name="button">${project.skills[0]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[1]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[2]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[3]}</button>
        </div>
        
        <div class="card-btn-para">
        ${project.description}
        </div>
        <div class="action-btn-container">
     
         <a href="${project.seeLive}" target="_blank">  <button class="action-btn-popup-btn" type="button" name="button">See Live <i class="bi bi-box-arrow-up-right"></i></button></a>
         <a href="${project.seeSource}" target="_blank"> <button class="action-btn-popup-btn1" type="button" name="button">See Source <i class="bi bi-github"></i></button></a>
        </div>
        </div>
        </div>
      </div>
    </section>
 `;
  body.appendChild(popupWindow);
});
const feature1 = document.getElementById('btn-1');
const feature2 = document.getElementById('btn-2');
const feature3 = document.getElementById('btn-3');
const feature4 = document.getElementById('btn-4');
const feature5 = document.getElementById('btn-5');
const feature6 = document.getElementById('btn-6');

const IconClose1 = document.getElementById('close-1');
const IconClose2 = document.getElementById('close-2');
const IconClose3 = document.getElementById('close-3');
const IconClose4 = document.getElementById('close-4');
const IconClose5 = document.getElementById('close-5');
const IconClose6 = document.getElementById('close-6');

const popup1 = document.getElementById('card-1');
const popup2 = document.getElementById('card-2');
const popup3 = document.getElementById('card-3');
const popup4 = document.getElementById('card-4');
const popup5 = document.getElementById('card-5');
const popup6 = document.getElementById('card-6');

feature1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

IconClose1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

feature2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

IconClose2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

feature3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

IconClose3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

feature4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});

IconClose4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});

feature5.addEventListener('click', () => {
  popup5.classList.toggle('active');
});

IconClose5.addEventListener('click', () => {
  popup5.classList.toggle('active');
});

feature6.addEventListener('click', () => {
  popup6.classList.toggle('active');
});

IconClose6.addEventListener('click', () => {
  popup6.classList.toggle('active');
});

const contactForm = document.getElementById('contact-form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

const formValidate = (event) => {
  if (fullName.value === '' || fullName.value == null) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your full name.';
    event.preventDefault();
  } else if (email.value === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your email address.';
    event.preventDefault();
  } else if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your valid email address in lowercase.';
    event.preventDefault();
  } else if (/[A-Z]/.test(email.value)) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please use Lowercase in your email address';
    event.preventDefault();
  } else if (message.value === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your message.';
    event.preventDefault();
  } else {
    errorMessage.style.display = 'none';
  }
};

contactForm.addEventListener('submit', formValidate);

contactForm.addEventListener('submit', () => {
  const storeData = {
    storeName: fullName.value,
    storeEmail: email.value,
    storeMessage: message.value,
  };
  localStorage.setItem('storeData', JSON.stringify(storeData));
});

window.onload = function dataLoad() {
  const data = JSON.parse(localStorage.getItem('storeData'));
  if (data) {
    fullName.value = data.storeName;
    email.value = data.storeEmail;
    message.value = data.storeMessage;
  }
};