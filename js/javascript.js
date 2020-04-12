$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

const nav = document.querySelector(".nav");
const list = document.querySelector(".nav > ul");
const toTopLink = document.querySelector('.to-top-link');
const navPosition = nav.getBoundingClientRect();

window.addEventListener("scroll", function() {
  if (pageYOffset >= navPosition.top) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("nav-fixed");
  } else {
    document.body.style.paddingTop = "";
    nav.classList.remove("nav-fixed");
  }
});

// Scroll To Section
list.addEventListener("click", function(event) {
  const target = event.target;

  if (target === this || target.nodeName === "LI") return;

  event.preventDefault();

  const href = target.getAttribute("href");
  const el = document.querySelector(href);

  const top =
    el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight;

  window.scrollTo({ top: top, behavior: "smooth" });
});


// Scroll back to top
toTopLink.addEventListener('click', function(event) {
  event.preventDefault();
  
   window.scrollTo({ top: 0, behavior: "smooth" });
});

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("div.seccion");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if( section.offsetTop <= fromTop && 
        section.offsetTop + section.offsetHeight > fromTop ){
      link.classList.add("text-neon-sm");
    }else{
      link.classList.remove("text-neon-sm");
    }
  });
});

particlesJS("particles", {
  "particles": {
    "number": {
      "value": 223,
      "density": {
        "enable": true,
        "value_area": 1282.7296486924183
      }
    },
    "color": {
      "value": "#042b4e"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "http://i.imgur.com/t9xEbUz.png",
        "width": 200,
        "height": 200
      }
    },
    "opacity": {
      "value": 0.3447004312763533,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 3.248308849205381,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 144.2932037901014,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top-right",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


var slider = tns({
    container: '.my-slider',
    items: 1,
    loop: true,
    controlsText: ["Anterior", "Siguiente"],
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    },
    "mouseDrag": true
  });