// Create an array of tasks
// It consists of objects of the form:
// task = {statusTask: false, textTask: ""}
var arrayTasks = new Array();
// Boolean variable displays hide or show tasks
var areShowTasks = true;
// That we display:
// default "all" or "active" or "completed"
var whatShow = "all";
// Variable for viewing element with focus
var focusId;
// Edit task:
// false - off; true - on
var editMode = false;
// Assign an event handler function
window.onload = function() {
    // Loading data into an array and display it to the user
    LoadLocalStorageToArrayTasks();
    // Pressing the Enter button - to add a new record
    document.getElementById("input-Form-New-Task").addEventListener("keypress", AddNewTaskToArray);
    // Click the button to delete all completed tasks
    document.getElementById("clear-Completed").addEventListener("click", ClearCompleted);
    // Click on the checkbox to show and hide list
    document.getElementById("checkbox-Expand-TurnTasks").addEventListener("click", ExpandTurnTasks);
    // Click on the filter
    document.getElementById("show-All").addEventListener("click", ShowAll);
    document.getElementById("show-Active").addEventListener("click", ShowActive);
    document.getElementById("show-Comleted").addEventListener("click", ShowCompleted);
    // Upload data after closing the page
    window.addEventListener("beforeunload", LoadArrayTasksToLocalStorage);
};
// All click event
document.onclick = function(e) {
    e = e || event;
    var target = e.target || e.srcElement;
    // Click on the button to delete the record
    if (target.className === "button-Delete-Task") {
        // Id element which removes
        var idStr = target.id.replace(/\.2\.0/, "");
        var idInt = parseInt(idStr);
        // Remove the item(task) from the list(ul)
        DeleteTaskFromUl(idStr);
        // Removes element from array of tasks
        DeleteTaskFromArray(idInt);
        // Update id in list(ul)
        UpdateDataListId(idInt);
        // Update the record of the amount of the remaining tasks
        UpdateNumberUnfinishedTasks();
    }
    // Click on the checkbox - task status
    if (target.className === "checkbox-Done") {
        // Id element which changes status
        var id = target.id.replace(/\.0/, "");
        var idInt = parseInt(id);
        // Change status task
        arrayTasks[idInt].statusTask ^= true;
        // Update the record of the amount of the remaining tasks
        UpdateNumberUnfinishedTasks();
    }
    if (editMode) {
        if (document.activeElement.id !== focusId) {
            SaveEditTask();
        }
    }
}
// Double-click on the item to edit task
document.ondblclick = function(e) {
    e = e || event;
    var target = e.target || e.srcElement;
    // If pressed on the task
    if (target.className === "text") {
        // Id element which press
        var id = target.id.replace(/\.1/, "");
        var idInt = parseInt(id);
        // Input for editing
        document.getElementById(id + ".1").innerHTML = "<input class=\"task-Edit\" type=\"text\" id=\"" + id + ".1.0\"" + "value=\"" + arrayTasks[idInt].textTask + "\">";
        // Focus-editing:
        focusId = id + ".1.0"
        // Editing mode
        editMode ^= true;
    }
};
// Load data to localStorage
// to work with them after reboot
function LoadArrayTasksToLocalStorage() {
    localStorage.clear();
    for (var i = 0; i < arrayTasks.length; ++i) {
        localStorage.setItem(i.toString(), JSON.stringify(arrayTasks[i]));
    }
}
// Load data from localStorage to array
function LoadLocalStorageToArrayTasks() {
    for (var i = 0; i < localStorage.length; ++i) {
        arrayTasks[i] = JSON.parse(localStorage.getItem(i.toString()));
        // Create and add to the form element
        ModelingPasteStrLiElement(i);
        // Update the record of the amount of the remaining tasks
        UpdateNumberUnfinishedTasks();
        if (arrayTasks[i].statusTask === 1) {
            document.getElementById(i.toString() + ".0").checked = true;
        }
    }
}
// Show all tasks
function ShowAll() {
    var element;
    for (var i = 0; i < arrayTasks.length; ++i) {
        element = document.getElementById(i.toString());
        element.style.display = "block";
    }
    ExpandTaskFromFilters();
}
// Show active tasks
function ShowActive() {
    var element;
    for (var i = 0; i < arrayTasks.length; ++i) {
        element = document.getElementById(i.toString());
        // If the task is not completed
        if (!arrayTasks[i].statusTask) {
            // Show
            element.style.display = "block";
        }
        else {
            // If the task is completed
            element.style.display = "none";
        }
    }
    ExpandTaskFromFilters();
}
// Show completed tasks
function ShowCompleted() {
    var element;
    for (var i = 0; i < arrayTasks.length; ++i) {
        element = document.getElementById(i.toString());
        // If the task is completed
        if (arrayTasks[i].statusTask) {
            // Show
            element.style.display = "block";
        }
        else {
            // If the task is not completed
            element.style.display = "none";
        }
    }
    ExpandTaskFromFilters();
}
function ExpandTaskFromFilters() {
    // Show element ul
    document.getElementById("listElement").style.display = "block";
    document.getElementById("checkbox-Expand-TurnTasks").checked = false;
    areShowTasks = true;
}
// Add new task to array
function AddNewTaskToArray() {
    var e = e || window.event;
    // Add when pressed "Enter"
    if (e.keyCode === 13) {
        // Check input line
        var str = document.getElementById("input-Form-New-Task").value;
        if (str !== "") {
            var index = arrayTasks.length;
            // Create object and add him to array
            arrayTasks[index] = {statusTask: 0, textTask: str};
            // Update "input"
            document.getElementById("input-Form-New-Task").value = "";
            // Create and add element to the form
            ModelingPasteStrLiElement(index);
            // Update the record of the amount of the remaining tasks
            UpdateNumberUnfinishedTasks();
        }
    }
}
// Delete task from array
function DeleteTaskFromArray(index) {
    // We pass from the element which will delete to end of the list rebinding objects
    for (var i = index; i < arrayTasks.length - 1; ++i) {
        arrayTasks[i].statusTask = arrayTasks[i + 1].statusTask;
        arrayTasks[i].textTask = arrayTasks[i + 1].textTask;
    }
    // Delete last element
    arrayTasks.pop();
}
// Delete task
// Delete all elements in <li>
function DeleteTaskFromUl(id) {
    var element = document.getElementById(id);
    element.remove();
}
// After losing the focus on the edit control
// Save the changes in the array
function SaveEditTask() {
    // Get changed value
    var str = document.getElementById(focusId).value;
    // Change the id to find div where write text
    var newId = focusId.replace(/\.0/, "");
    // Write the text and remove input
    document.getElementById(newId).innerHTML = str;
    // Change id and save changes in array
    newId = newId.replace(/\.1/, "");
    var idInt = parseInt(newId);
    // Save changes in array
    arrayTasks[idInt].textTask = str;
    focusId = "";
    editMode ^= true;
}
// Update list of all tasks
function UpdateDataListId(id) {
    for (var i = id + 1; i < arrayTasks.length + 1; ++i) {
        // Update id:
        // li
        document.getElementById(i.toString()).id = (i - 1).toString();
        // checkbox(task status)
        document.getElementById(i.toString() + ".0").id = (i - 1).toString() + ".0";
        // div(task text)
        document.getElementById(i.toString() + ".1").id = (i - 1).toString() + ".1";
        // div(delete button)
        document.getElementById(i.toString() + ".2").id = (i - 1).toString() + ".2";
        // span
        document.getElementById(i.toString() + ".2.0").id = (i - 1).toString() + ".2.0";
    }
}
// Update the record of the amount of the remaining tasks
function UpdateNumberUnfinishedTasks() {
    var number = 0;
    // Calculate the remaining tasks
    for (var i = 0; i < arrayTasks.length; ++i) {
        if (!arrayTasks[i].statusTask)
            ++number;
    }
    // Show them
    if (number > 1)
        document.getElementById("unfinishedTasks").innerHTML = number + " toDos left";
    else
        document.getElementById("unfinishedTasks").innerHTML = number + " toDo left";
}
// Remove completed tasks
function ClearCompleted() {
    for (var i = 0; i < arrayTasks.length; ++i) {
        // Check task status
        if (arrayTasks[i].statusTask) {
            // Delete element from list(ul)
            DeleteTaskFromUl(i.toString());
            // Delete element from array
            DeleteTaskFromArray(i);
            // Update id in list(ul)
            UpdateDataListId(i);
            --i;
        }
    }
}
// Show or hide tasks
function ExpandTurnTasks() {
    // If there are tasks
    if (arrayTasks.length > 0) {
        // If shows elements
        if (areShowTasks) {
            // Hide elements in ul
            document.getElementById("listElement").style.display = "none";
            areShowTasks ^= true;
        }
        else {
            // Show elements in ul
            document.getElementById("listElement").style.display = "block";
            areShowTasks ^= true;
        }
    }
    else {
        document.getElementById("checkbox-Expand-TurnTasks").checked = false;
    }

}
// Form a string that will contain all of the internal elements <li>
// Accepts serial task number in the array for id
function ModelingPasteStrLiElement(num) {
    var newList = document.createElement("li");
    newList.className = "task";
    newList.id = num;
    listElement.appendChild(newList);
    document.getElementById(num).innerHTML = ModelingStrCheckboxDone(num) + ModelingStrDivText(num) + ModelingStrButtonDeleteDivSpan(num);
}
// Forming html for checkbox
function ModelingStrCheckboxDone(num) {
    var str = "<input class=\"checkbox-Done\"" + "id=" + num + ".0 " + "type=\"checkbox\">";
    return str;
}
// Forming html for div with task text
function ModelingStrDivText(num) {
    var str = "<div class=\"text\" " + "id=" + num + ".1>" + arrayTasks[num].textTask + "</div>";
    return str;
}
// Forming html for div with delete button
function ModelingStrButtonDeleteDivSpan(num) {
    var str = "<div class=\"button-Delete\" " + "id=" + num + ".2 " + "onselectstart=\"return false\" onmousedown=\"return false\"><span class=\"button-Delete-Task\"" + "id=" + num + ".2.0" + ">X</span></div>";
    return str;
}