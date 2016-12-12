(function () {
    var switchTab = document.querySelector(".switch-tab");
    var wrap = document.querySelector(".wrapper");
    var btnContact = document.querySelector(".btn-contact");
    var popUp = document.querySelector(".pop-up");
    var closePopUp = document.querySelector(".close-pop-up");
    var currentYear = document.querySelector(".year");
    
    //    task #5
    
   
    //    task #1
    switchTab.onclick = function(event) {
        
        var target = event.target;
        
        switch ( target.name ) {
            case "light-button": wrap.classList.remove("dark-background");break;
            case "dark-button": wrap.classList.add("dark-background");break;
        }
    };
    
    //    task #2
    btnContact.onclick = function() {
        popUp.classList.add("pop-up-show");
    };

    closePopUp.onclick = function() {
        popUp.classList.remove("pop-up-show");
    };
  
    //    task #3
    
    currentYear.innerHTML = new Date().getFullYear();
  
    //    task #4
    var infoAboutUser = document.querySelector(".content-right-side");
    var userName = document.querySelector(".user-name");
    var userTarget = document.querySelector(".user-target");
    var userInfo = document.querySelector(".user-info");
    
    infoAboutUser.ondblclick = function(event){
        var target =  event.target;
        var formElem = target.nextElementSibling;
        target.parentNode.classList.add("user-name-show");
        formElem.value = target.textContent;
        formElem.focus();

        formElem.onblur = function(e){
            formElem.previousElementSibling.textContent = formElem.value;
            formElem.parentNode.classList.remove("user-name-show");
        }
    }

    // task #5

    var request = new XMLHttpRequest();
    request.open('GET', 'js/data.json', false);

    request.send();

    if (request.status != 200) {
        alert( request.status + ': ' + request.statusText );
    } else {
        var data = eval('('+request.responseText+')');
        document.querySelector('.user-name h1')
            .textContent = data.name;
        document.querySelector('.user-target h3')
            .textContent = data.target;
        document.querySelector('.user-info p')
            .textContent = data.info;
    }

})();