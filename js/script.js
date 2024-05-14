AOS.init({
    duration: 2000,
});

window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 150);
});

const shaz = document.querySelectorAll(".my_btn");
shaz.forEach(lubyou => {
    lubyou.addEventListener("click", () => {
        document.querySelector(".act")?.classList.remove("act");
        lubyou.classList.add("act");
    });
});

$(document).ready(() => {

    $('#toggle-search').on('click', () => {
        $('#searchBar').toggle('display: inline-block');
      });

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});