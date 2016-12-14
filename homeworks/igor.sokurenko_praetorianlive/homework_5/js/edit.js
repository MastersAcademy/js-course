document.addEventListener("DOMContentLoaded", function() {
    function func_edit(elem, typeElem) {
        var about_me = document.querySelector(elem);
        about_me.addEventListener("dblclick", function() {
            var elem_edit;
            if (typeElem === "textarea") {
                elem_edit = document.createElement("textarea");
                elem_edit.cols = 50;
                elem_edit.rows = 30;
            } else {
                elem_edit = document.createElement("input");
                elem_edit.type = "text";            
            }
            elem_edit.value = about_me.innerHTML;        
            about_me.parentNode.insertBefore(elem_edit, about_me.nextSibling);
            about_me.style.display = "none";
            elem_edit.focus();
            elem_edit.addEventListener("blur", function() {
                about_me.innerHTML = elem_edit.value;
                about_me.parentNode.removeChild(elem_edit);
                about_me.style.display = "block";
            });
        });
    }
    func_edit("#txt");
    func_edit("h1");
    func_edit("h3");
    func_edit(".memo", "textarea"); 
});