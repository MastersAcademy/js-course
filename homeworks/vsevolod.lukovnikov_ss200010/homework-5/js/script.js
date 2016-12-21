(function () {
    var switchTab = document.querySelector(".switch-tab");
    var wrap = document.querySelector(".wrapper");
    var btnContact = document.querySelector(".btn-contact");
    var popUp = document.querySelector(".pop-up");
    var closePopUp = document.querySelector(".close-pop-up");
    var currentYear = document.querySelector(".year");
    
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

    infoAboutUser.ondblclick = function(event){
        var target =  event.target;
        var formElem = target.nextElementSibling;
        target.parentNode.classList.add("user-name-show");
        formElem.value = target.textContent;
        formElem.focus();

        formElem.onblur = function(){
            formElem.previousElementSibling.textContent = formElem.value;
            formElem.parentNode.classList.remove("user-name-show");
        }
    };

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

    // task#6

    document.querySelector(".fb-btn a").onclick = function(){
        event.preventDefault();
        open("http://www.facebook.com/sharer.php?u=http://localhost:63342/homework-5/index.html",
            "displayWindow","width=520,height=300,left=350,top=170,status=no,toolbar=no,menubar=no");

    };

    document.querySelector(".vk-btn a").innerHTML = VK.Share.button('https://vk.com/macademy_ck', {type: 'custom', text: "VKontakte"});

    document.querySelector(".twitter-share-btn").onclick = function (d,s,id){
        var js,fjs = d.getElementsByTagName(s)[0];
        if(!d.getElementById(id))
            {js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);}
    }(document,"script","twitter-wjs");


})();