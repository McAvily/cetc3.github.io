window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('hide');

  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 800);
});

document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".side-menu");

    toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".side-menu");
    const overlay = document.querySelector(".overlay");

    toggler.addEventListener("click", function() {
        menu.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function() {
        menu.classList.remove("show");
        overlay.classList.remove("active");
    });
});

const fullText = `The Crescent Emerging Technologies Centre (CETC) equips students with future-ready skills
through hands-on learning in robotics, AI, coding, and IoT.
It offers a creative space where young minds can explore cutting-edge technology
under expert guidance.`;

const typewriter = document.getElementById('typewriter');
let index = 0;

function type() {
  if (index <= fullText.length) {
    typewriter.textContent = fullText.slice(0, index);
    index++;
    setTimeout(type, 40);
  }
}

type();

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.course-card');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (rect.top <= windowHeight * 0.75) && (rect.bottom >= windowHeight * 0.25);
  }

  function checkCards() {
    cards.forEach((card, index) => {
      if (isInViewport(card)) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200);
      } else {
        card.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkCards);
  window.addEventListener('resize', checkCards);
  checkCards();
});

function handleMissionFade() {
  const blocks = document.querySelectorAll('.mission-block');
  const triggerBottom = window.innerHeight * 0.9;

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      block.classList.add('visible');
    } else {
      block.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleMissionFade);
window.addEventListener('load', handleMissionFade);

document.addEventListener('DOMContentLoaded', () => {
  const missionTexts = document.querySelectorAll('.mission-text');
  const typedOnce = new Set();

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function typeText(element, text, speed = 40) {
    let index = 0;
    element.textContent = '';

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        element.style.borderRight = 'none';
      }
    }

    type();
  }

  function checkAndType() {
    missionTexts.forEach(el => {
      if (isInViewport(el) && !typedOnce.has(el)) {
        const fullText = el.getAttribute('data-fulltext');
        typedOnce.add(el);
        typeText(el, fullText);
      }
    });
  }

  window.addEventListener('scroll', checkAndType);
  window.addEventListener('load', checkAndType);
});

document.addEventListener('DOMContentLoaded', () => {
  const facultyCards = document.querySelectorAll('.faculty-card');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function checkScroll() {
    facultyCards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
