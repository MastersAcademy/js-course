(function () {
    'use strict';

    var slides = document.querySelectorAll('.slider .slide'),
        slide = 0;

    document.addEventListener('click', slider);

    function slider(e) {
        var elem = e.target,
            direction = elem.dataset.direction;
        if (direction === 'next' && slides.length > 3) {
            nextSlide(slide + 1);
        } else if (direction === 'prev' && slides.length > 3) {
            prevSlide(slide - 1);
        }

        function nextSlide(n) {
            slides[slide].className = 'slide';
            slide = (n + slides.length) % slides.length;
            if (slide < slides.length - 2) {
                slides[slide].className = 'slide showed';
                slides[slide + 1].className = 'slide showed-2';
                slides[slide + 2].className = 'slide showed-3';
            } else if (slide < slides.length - 1) {
                slides[slide].className = 'slide showed';
                slides[slide + 1].className = 'slide showed-2';
                slides[0].className = 'slide showed-3';
            } else if (slide === slides.length - 1) {
                slides[slide].className = 'slide showed';
                slides[0].className = 'slide showed-2';
                slides[1].className = 'slide showed-3';
            }
        }

        function prevSlide(n) {
            slide = (n + slides.length) % slides.length;
            if (slide < slides.length - 3) {
                slides[0].className = 'slide';
                slides[slide].className = 'slide showed';
                slides[slide + 1].className = 'slide showed-2';
                slides[slide + 2].className = 'slide showed-3';
                slides[slide + 3].className = 'slide';
            } else if (slide === slides.length - 3) {
                slides[0].className = 'slide';
                slides[slide].className = 'slide showed';
                slides[slide + 1].className = 'slide showed-2';
                slides[slide + 2].className = 'slide showed-3';
            } else if (slide === slides.length - 1) {
                slides[slide].className = 'slide showed';
                slides[0].className = 'slide showed-2';
                slides[1].className = 'slide showed-3';
                slides[2].className = 'slide';
            } else if (slide === slides.length - 2) {
                slides[slide].className = 'slide showed';
                slides[slide + 1].className = 'slide showed-2';
                slides[0].className = 'slide showed-3';
                slides[1].className = 'slide';
            }
        }
    }

})();
