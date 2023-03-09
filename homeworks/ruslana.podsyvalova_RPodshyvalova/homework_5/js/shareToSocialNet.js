document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a.linktopage");
    var arrOfLinks = Array.prototype.slice.call(links);
    arrOfLinks.forEach( function(currentLink) {
        currentLink.addEventListener("click", function(event) {
            var siteLocation = "https://github.com/RPodshyvalova/js-course/tree/master/homeworks/ruslana.podsyvalova_RPodshyvalova/homework_5";
            var nameLink = currentLink.innerHTML;
            switch (nameLink) {
                case "Facebook": currentLink.setAttribute("href", "http://www.facebook.com/sharer/sharer.php?u=" 
                    + siteLocation + "&t=AboutMe");
                    break;
                case "Instagram": currentLink.setAttribute("href", "#");
                    break;  
                case "Vkontakte": currentLink.setAttribute("href", "http://vk.com/share.php?url="  + siteLocation);
                    break; 
                case "Email": currentLink.setAttribute("href", "mailto: ?subject=AboutMe&body=" + siteLocation);
                    break;   
                case "Twitter": currentLink.setAttribute("href", "http://twitter.com/share?text=AboutMe " + siteLocation);
                    break; 
            }
        });    
    });
});

