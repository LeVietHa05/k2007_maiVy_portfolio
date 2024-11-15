

//body's background changes
let bgIndex = 0;
let bgs = [
    'url(images/bg-1.png)',
    'url(images/bg-2.png)',
    'url(images/bg-3.png)'
];
let home_bgs = [
    'url(images/home-img-5.png)',
    'url(images/home-img-6.png)',
    'url(images/home-img-7.png)',
    'url(images/home-img-8.png)',
    'url(images/home-img-9.png)',
    'url(images/home-img-10.png)'
]
setInterval(function () {
    let body = document.body;
    body.style.backgroundImage = bgs[bgIndex];

    bgIndex = (bgIndex + 1) % bgs.length
}, 2100);


//navbar's active class changes
let navLink = document.querySelectorAll('#nav-containter #nav a');
navLink.forEach(function (link) {
    link.addEventListener('click', function () {
        console.log('click');
        navLink.forEach(function (link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

let returnTop = document.createElement('div');
returnTop.id = 'return-top';
returnTop.innerHTML = `<img src="images/arrow-left.svg" alt ="top">`


window.onscroll = function () {
    if (window.scrollY > 200) {
        returnTop.style.display = 'block';
    }
    else {
        returnTop.style.display = 'none';
    }
}
returnTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

document.body.appendChild(returnTop);



if (window.location.pathname === '/') {
    // let home_bgIndex = 0;
    // setInterval(function () {
    //     let slide5 = document.getElementById('slide5');
    //     slide5.style.backgroundImage = home_bgs[home_bgIndex];
    //     if (home_bgIndex == home_bgs.length - 1) {
    //         slide5.style.backgroundSize = 'contain';
    //         slide5.style.backgroundPosition = 'center'; 
    //     }
    //     else {
    //         slide5.style.backgroundSize = 'cover';
    //         slide5.style.backgroundPosition = 'initial';
    //     }
    //     home_bgIndex = (home_bgIndex + 1) % home_bgs.length
    // }, 1600);



    let slideIndex = 1;
    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide-item");
        let dots = document.getElementsByClassName("dot");

        console.log(slides);
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].className += " active";
        dots[slideIndex - 1].className += " active";
    }

}

