document.addEventListener('DOMContentLoaded', function() {

    /*-------------------Change theme-------------------------*/

    var lightTheme = document.querySelector('.light'),
        darkTheme = document.querySelector('.dark'),
        body = document.getElementsByTagName("BODY")[0];

    lightTheme.addEventListener('click', function(){
        body.classList.remove('body-dark');
    });

    darkTheme.addEventListener('click', function(){
        body.classList.add('body-dark');
    });

    /*--------------------Modal window------------------------*/

    var buttonContact = document.querySelector('.contact-me'),
        modal = document.querySelector('.modal-contact'),
        close = document.querySelector('.fa-times');

    buttonContact.addEventListener('click', function(){
        modal.style.display = "block";
    });

    close.addEventListener('click', function(){
        modal.style.display = "none";
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    /*--------------------Year in copyright------------------------*/

    var year = document.querySelector('.year');
    year.innerHTML = new Date().getFullYear();

    /*--------------------Change text------------------------*/

    var about = document.querySelector('.about');
    about.addEventListener('dblclick', function(e){
        var target = e.target,
            str = target.innerHTML;

        if(target.hasAttribute("data-editable")) {
            target.style.display = "none";
            if (target.tagName == 'SPAN') {
                var input = document.createElement('INPUT');
                input.setAttribute("type", "text");
                input.setAttribute('value', str);
                input.classList.add("input-change");
            }
            else {
                var input = document.createElement('TEXTAREA');
                input.innerHTML = str;
                input.classList.add("textarea-change");
            }
            target = target.parentNode.replaceChild(input,target);
            input.focus();
            input.addEventListener('blur', function(){
                target.innerHTML = input.value;
                input = input.parentNode.replaceChild(target,input);
                target.style.display = "block";
            })
        }
    });

    /*--------------------JSON--------------------------*/

    var xobj = new XMLHttpRequest(),
        name = document.querySelector('.about-name'),
        work = document.querySelector('.about-work'),
        text = document.querySelector('.about-text');

    xobj.open('GET', 'js/about.json', false);
    xobj.addEventListener('readystatechange', function(){
        if (xobj.readyState == 4 && xobj.status == "200") {
            var data = JSON.parse(String(xobj.response));
            name.innerHTML = data.name;
            work.innerHTML = data.work;
            text.innerHTML = data.text;
        }
    });
    xobj.send();

});
