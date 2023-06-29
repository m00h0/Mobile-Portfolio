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
    title: 'Multi-Post Stories',
    snapshot: 'Images/Img Plaholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 2,
    title: 'Multi-Post Stories',
    snapshot: 'Images/Img Plaholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 3,
    title: 'Multi-Post Stories',
    snapshot: 'Images/Img Plaholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 4,
    title: 'Multi-Post Stories',
    snapshot: 'Images/Img Plaholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 5,
    title: 'Multi-Post Stories',
    snapshot: 'Images/Img Plaholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectInfo: { company: 'Microverse', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/newtonah0/Mobile-Portfolio',
    seeSource: 'https://github.com/newtonah0/Mobile-Portfolio',
  },

  {
    id: 6,
    title: 'Multi-Post Stories',
    snapshot: './Images/assets/Snapshoot Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
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
  <ul class="stacks">
  <li class="list-item canopy">${project.projectInfo.company}</li>
  <li class="list-item backend-dev">${project.projectInfo.role}</li>
  <li class="list-item year">${project.projectInfo.year}</li>
  </ul>
  <p class="card-text">${project.projectDescription}</p>
  <div class="card-btn">
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