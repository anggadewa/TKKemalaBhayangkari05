// sticky navigation

let navbar = $(".navbar");

$(window).scroll(() => {
  let onTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > onTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

// Counter Animation
let inCount = (selector) => {
  $(selector).each(() => {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: (value) => {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

let a = 0;
$(window).scroll(() => {
  let onTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= onTop) {
    a++;
    inCount(".rect h1");
  }
});

const container = document.querySelector(".container-imgGallery");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb-imgGallery");

container.addEventListener("click", function (e) {
  //cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb-imgGallery") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade-imgGallery");
    setTimeout(() => {
      jumbo.classList.remove("fade-imgGallery");
    }, 500);
  }

  thumbs.forEach(function (thumb) {
    // if(thumb.classList.contains('active')){
    //     thumb.classList.remove('active');
    // }
    thumb.className = "thumb-imgGallery";
  });

  e.target.classList.add("active-imgGallery");
});
