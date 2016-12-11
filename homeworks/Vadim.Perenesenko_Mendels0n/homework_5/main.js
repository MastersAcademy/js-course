document.addEventListener('DOMContentLoaded', function () {
    var today = new Date(), footer = document.querySelector('.copy');
    footer.innerHTML = ('&copy ' + today.getFullYear() + ' Vadim Perenesenko');

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);
        xhttp.onreadystatechange = function() {
        if(xhttp.readyState==4){
            var date = eval('('+xhttp.responseText+')');
            document.querySelector('.about-me')
                .innerHTML = date.port;
            document.querySelector('.surname')
                .innerHTML = date.name;
            document.querySelector('.spec')
                .innerHTML = date.spec;
        }
    };
    xhttp.send(null);
    var body = document.body,
        modal = document.querySelector('.modal'),
        btn = document.querySelector('.button'),
        btnWhite = document.querySelector('.button-white'),
        btnBlack = document.querySelector('.button-black');
    
    function openPopUp() {
        modal.classList.remove('hidden');
    }
    function closePopUp(event) {
        if (event.target == modal) {
            modal.classList.add('hidden');
        }
    }

    function textEdit(event) {
        var target = event.target;
        if(target.classList.contains('edit')){
            var textfield = document.createElement('textarea');
            if (target.tagName == 'P'){
                textfield.classList.add('about-textfield');
            }else {
                textfield.classList.add('header-textfield');
            }
            textfield.value = target.innerHTML;
            target.innerHTML = null;
            target.appendChild(textfield);
            textfield.focus();
            textfield.onblur = function () {
                target.innerHTML = textfield.value;
            }
        }
    }
    function whiteTheme() {
        if (body.classList.contains('blackTheme')) {
            body.classList.remove('blackTheme');
        }
    }
    function blackTheme() {
        body.classList.add('blackTheme');
    }

    btnWhite.addEventListener('click',whiteTheme);
    btnBlack.addEventListener('click',blackTheme);
    btn.addEventListener('click',openPopUp);
    window.addEventListener('click',closePopUp);
    window.addEventListener('dblclick',textEdit);
});
