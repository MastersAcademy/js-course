//SetTheme

var dark = document.getElementsByClassName("button1");
dark[0].addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple'
});

var light = document.getElementsByClassName("button2");
light[0].addEventListener('click', function () {
    document.body.style.backgroundColor = 'white'
});

//popup

var openPopup = document.getElementsByClassName('contact');
var popupMain = document.getElementById('popup_main');
var closePopup = document.getElementById('close');

openPopup[0].addEventListener('click', function () {
    popupMain.style.display = 'block';
});

closePopup.addEventListener('click', function () {
    popupMain.style.display = 'none';
});

// copyrigths date

var currentDate = new Date();

document.getElementById('date').innerHTML = '&#xA9 ' + 'RomanVertyporokh ' + currentDate;

// Edit text

//...