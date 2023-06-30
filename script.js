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
    title: 'Multi-Post Stories Gain+Glory',
    snapshot: './Images/assets/Snapshoot-Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    supdescription: 'Keeping track of hundreds of components',
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    snapshot: './Images/assets/Snapshoot-Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    supdescription: 'Keeping track of hundreds of components',
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    snapshot: './Images/assets/Snapshoot-Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    supdescription: 'Keeping track of hundreds of components',
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    snapshot: './Images/assets/Snapshoot-Portfolio.svg',
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    supdescription: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory Gain+Glory',
    snapshot: './Images/assets/Snapshoot-Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    supdescription: 'Keeping track of hundreds of components',
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    snapshot: './Images/assets/Snapshoot-Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    supdescription: 'Keeping track of hundreds of components',
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

];

projects.forEach((project) => {
  const bodySection = document.querySelector('.project-cards');
  const section = document.createElement('section');
  section.className = 'projects';
  section.innerHTML = `<div class=""project-cards">
  <img class="project-card" src=${project.snapshot} alt="Snap image for background">
  </div>
<div class="project-card_details">
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
     
          <button class="action-btn-popupBtn" type="button" name="button">See Live <i class="bi bi-box-arrow-up-right"></i></button>
          <button class="action-btn-popupBtn1" type="button" name="button">See Source <i class="bi bi-github"></i></button>
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