/* 
 * function editContentInElement(sourceElement, requiredTypeElement)
 * creates new element(depending on requiredTypeElement variable - input or textarea) 
 * instead of existing sourceElement if user double clicked on it.
 * Function copies data from sourceElement to new element, put focus on it and hides sourceElement.
 * User can change data in new editing element, then this information will be put on sourceElement
 * and editing element will be removed.
 */
document.addEventListener("DOMContentLoaded", function() {
    function editContentInElement(sourceElement, requiredTypeElement) {
        var tempElement;
        
        sourceElement.addEventListener("dblclick", function() {
            if (requiredTypeElement === "input") {
                tempElement = document.createElement("input");
                tempElement.setAttribute("type", "text"); 
                tempElement.style.height = "30px";
            }
            if (requiredTypeElement === "textarea") {
                tempElement = document.createElement("textarea");
                tempElement.cols = "40";
                tempElement.rows = "20"; 
            }
            tempElement.value = sourceElement.innerHTML;
            tempElement.style.backgroundColor = "yellow";
            sourceElement.style.display = 'none';
            sourceElement.parentNode.insertBefore(tempElement, sourceElement.nextSibling);
            tempElement.focus();

            tempElement.addEventListener("blur", function() {	
                sourceElement.innerHTML= tempElement.value;
                sourceElement.style.display = 'block';
                sourceElement.parentNode.removeChild(tempElement); 
            });
        });
    }
    
    editContentInElement(document.querySelector("h1"), "input");
    editContentInElement(document.querySelector("h2"), "input");
    editContentInElement(document.querySelector("h3"), "input");
    editContentInElement(document.querySelector(".maintxt"), "textarea");
//    var selector = "";
//    var count = document.querySelector("ul.socialnetslinks").children.length;
//    for (var i = 1; i <= count; i++) {
//        selector = "#item_" + i + " a.linktopage"; 
//        editContentInElement(document.querySelector(selector), "input");
//    }
});
