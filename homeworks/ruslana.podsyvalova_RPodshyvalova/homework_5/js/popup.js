document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".button");
    btn.addEventListener("click", function () {
	var divVar = document.createElement("div");
	divVar.className = "popup";
   	divVar.style.position = "relative";
    	divVar.style.display = "inline-block";
    	divVar.style.cursor = "pointer";
	
	var spanVar = document.createElement("span");
	spanVar.className = "popuptext";
	spanVar.id = "customPopup";
       	spanVar.innerHTML = "<p>email: <a href=\"mailto:pointContacts@gmail.com\" \n\
            class=\"linktopage\">pointContacts@gmail.com</a></p><p>skype: pointContacts</p>";
        spanVar.style.visibility = "hidden";
        spanVar.style.width = "250px";
        spanVar.style.background = "gray";
        spanVar.style.fontSize = "75%";
        spanVar.style.color = "white";
        spanVar.style.textAlign = "center";
        spanVar.style.zIndex = "1";
        spanVar.style.opacity = .75;
        spanVar.style.position = "absolute";
        spanVar.style.top = "20px";
        spanVar.style.marginLeft = "-170px";
        spanVar.style.padding = "20px 5px";

        divVar.appendChild(spanVar);
	this.append(divVar);
	
	var popup = document.querySelector('#customPopup');
        if (popup.style.visibility === 'hidden') {
            popup.style.visibility = 'visible';
        } else {
            popup.style.visibility = 'hidden';
        }

        // create arrow in popup 
        var addRule = function(sheet, selector, styles) {
            if (sheet.insertRule) return sheet.insertRule(selector + " {" + styles + "}", sheet.cssRules.length);
            if (sheet.addRule) return sheet.addRule(selector, styles);
        };
        addRule(document.styleSheets[0], ".popuptext:before", "content: ''; position: absolute; \n\
            top: -15%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; opacity = .35; \n\
            border-color: transparent  transparent  #555 transparent;");


    });
});