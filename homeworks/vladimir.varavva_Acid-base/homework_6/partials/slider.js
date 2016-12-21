function Slider() {
  
    this.slide = 0;
    this.slides = document.querySelectorAll('.slider .slide');
    this.listenEvents();
}

Slider.prototype = {

    run: function(e) {
        var direrction = e.target.dataset.direction;
        if (direrction === 'next' && this.slides.length > 3) {
            this.nextSlide(this.slide + 1);
        } else if (direrction === 'prev' && this.slides.length > 3) {
            this.prevSlide(this.slide - 1);
        }
    },

    nextSlide: function(n) {
        this.slides[this.slide].className = 'slide';
        this.slide = (n + this.slides.length) % this.slides.length;
        if (this.slide < this.slides.length - 2) {
            this.slides[this.slide].className = 'slide showed';
            this.slides[this.slide + 1].className = 'slide showed-2';
            this.slides[this.slide + 2].className = 'slide showed-3';
        } else if (this.slide < this.slides.length - 1) {
            this.slides[this.slide].className = 'slide showed';
            this.slides[this.slide + 1].className = 'slide showed-2';
            this.slides[0].className = 'slide showed-3';
        } else if (this.slide === this.slides.length - 1) {
            this.slides[this.slide].className = 'slide showed';
            this.slides[0].className = 'slide showed-2';
            this.slides[1].className = 'slide showed-3';
        }
    },

    prevSlide: function(n) {
        this.slide = (n + this.slides.length) % this.slides.length;
        if (this.slide < this.slides.length - 3) {
            this.slides[0].className = 'slide';
            this.slides[this.slide].className = 'slide showed';
            this.slides[this.slide + 1].className = 'slide showed-2';
            this.slides[this.slide + 2].className = 'slide showed-3';
            this.slides[this.slide + 3].className = 'slide';
        } else if (this.slide === this.slides.length - 3) {
            this.slides[0].className = 'slide';
            this.slides[this.slide].className = 'slide showed';
            this.slides[this.slide + 1].className = 'slide showed-2';
            this.slides[this.slide + 2].className = 'slide showed-3';
        } else if (this.slide === this.slides.length - 2) {
            this.slides[this.slide].className = 'slide showed';
            this.slides[this.slide + 1].className = 'slide showed-2';
            this.slides[0].className = 'slide showed-3';
            this.slides[1].className = 'slide';
        } else if (this.slide === this.slides.length - 1) {
            this.slides[this.slide].className = 'slide showed';
            this.slides[0].className = 'slide showed-2';
            this.slides[1].className = 'slide showed-3';
            this.slides[2].className = 'slide';
        }

    },

    listenEvents: function() {
        if (window.location.pathname === '/slider.html') {
            document.addEventListener('click', this.run.bind(this));
        }
    }
};

module.exports = new Slider();
