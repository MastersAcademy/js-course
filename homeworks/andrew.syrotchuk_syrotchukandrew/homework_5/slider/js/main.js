document.addEventListener('DOMContentLoaded', function () {

    var slideIndex = [1, 2, 3];

    showSlides(slideIndex);

    document.getElementsByClassName('prev')[0].addEventListener('click', function (event) {
        slideIndex.forEach(function (element, index, array) {
            array[index] = --element;
        });
        showSlides(slideIndex);
    }, false);

    document.getElementsByClassName('next')[0].addEventListener('click', function (event) {
        slideIndex.forEach(function (element, index, array) {
            array[index] = ++element;
        });
        showSlides(slideIndex);
    }, false);

    function showSlides(slideIndex) {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        slideIndex.forEach(function (element, index, array) {
            if (element > slides.length) {
                array[index] = 1;
            }
        });

        slideIndex.forEach(function (element, index, array) {
            if (element < 1) {
                array[index] = slides.length;
            }
        });

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('left');
            slides[i].classList.remove('center');
            slides[i].classList.remove('right');
        }

        slides[slideIndex[0] - 1].style.display = "block";
        slides[slideIndex[0] - 1].classList.add('left');
        slides[slideIndex[1] - 1].style.display = "block";
        slides[slideIndex[1] - 1].classList.add('center');
        slides[slideIndex[2] - 1].style.display = "block";
        slides[slideIndex[2] - 1].classList.add('right');
    }
}, false);
