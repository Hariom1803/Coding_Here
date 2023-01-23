$(document).ready(function () {
  // scroll to top
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 5) {
      $("#search-box").removeClass("active");
    }
  });

  // scroll spy / nav-pills
  $("body").scrollspy({
    target: "#mainNavbar",
    offset: 100,
  });

  // owl carousel

  // service-slider
  $(".service-slider").owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [
      '<a class="fas fa-angle-left"></a>',
      '<a class="fas fa-angle-right"></a>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      769: {
        items: 3,
      },
    },
  });

  // customer-slider
  $(".customer-slider").owlCarousel({
    loop: true,
    margin: 40,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
    },
  });

  // expert-slider
  $(".expert-slider").owlCarousel({
    loop: true,
    margin: 20,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: false,
    nav: true,
    navText: [
      '<a class="fas fa-angle-left"></a>',
      '<a class="fas fa-angle-right"></a>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      769: {
        items: 3,
      },
    },
  });

  // blog-slider
  $(".blog-slider").owlCarousel({
    loop: true,
    margin: 20,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: false,
    nav: true,
    navText: [
      '<a class="fas fa-angle-left"></a>',
      '<a class="fas fa-angle-right"></a>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      769: {
        items: 3,
      },
    },
  });
});

const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const scrollTop = document.querySelector(".scroll-top");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const preLoader = () => {
  setInterval(() => {
    document.querySelector(".loader").style.display = "none";
  }, 1000);
};
window.onload = preLoader;

function themeMode() {
  document.body.classList.toggle("theme-color");
}

// counter
var a = 0;
$(window).scroll(function () {
  var oTop = $("#section_counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});

// form

// function intechFormSubmit() {
//   let x = document.forms["intechForm"]["name"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   } else {
//     alert("Form submitted successfully");
//   }
// }

function intechFormSubmit() {
  var intechForm = document.getElementById("intechForm");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var description = document.getElementById("description").value;

  if (name == "" || email == "" || number == "" || description == "") {
    alert("All fields are required!");
    return false;
  } else {
    alert("Form submitted successfully...");
  }

  intechForm.submit();
}
