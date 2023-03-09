document.addEventListener("DOMContentLoaded", function() {    
    function setLinks() {
        var socialarray = document.querySelectorAll(".item");
        var link, gitLink = "https://github.com/praetorianlive/js-course/tree/master/homeworks/igor.sokurenko_praetorianlive";
        for (var i = 0; i < socialarray.length; i++) {
            link = socialarray[i];         
            switch(link.innerHTML) {
                case "Facebook": 
                    link.href = "http://www.facebook.com/sharer.php?u=" + gitLink;  
                    break; 
                case "Instagram":
                    link.href = "#";
                    break;
                case "Vkontakte":
                    link.href = "http://vkontakte.ru/share.php?url=" + gitLink;
                    break;
                case "Email":
                    link.href = "mailto: ?subject=Description&body=" + gitLink;
                    break;
                case "Twitter":
                    link.href = "http://twitter.com/share?text= " + gitLink;
                    break;
            }
        }        
    }
    setTimeout(setLinks, 5000);  
});