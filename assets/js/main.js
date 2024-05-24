/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined
const sections = document.querySelectorAll('section[id]');

// add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 10,
      sectionId = current.getAttribute('id');
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header');
  // when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is greater than 350 viewport height, add the show-scroll class to scrool-top class
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('tab__active');
    });

    target.classList.add('tab__active');

    tabs.forEach((tab) => {
      tab.classList.remove('tab__active');
    });

    tab.classList.add('tab__active');
  });
});

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactSubject = document.getElementById('contact-subject'),
  contactMessage = document.getElementById('contact-message'),
  errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === '' ||
    contactMessage.value === ''
  ) {
    // show message
    errorMessage.textContent = 'Write all the input fields';
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        'service_qzh6ymz',
        'template_v51gr8c',
        '#contact-form',
        'o3tWIaBrjgDdAoT8d'
      )
      .then(
        () => {
          // show message and add color, window + dot to open emoji
          errorMessage.classList.add('color-first');
          errorMessage.textContent = 'Message sent ✔';

          // remove message after 5 seconds
          setTimeout(() => {
            errorMessage.textContent = '';
          }, 5000);
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
        }
      );

    // clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);


const text = document.querySelector(".section__title");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "About Me";
  }, 0);
  setTimeout(() => {
    text.textContent = "About Shin";
  }, 2000);
  setTimeout(() => {
    text.textContent = "About ShinayLim";
  }, 4000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);


