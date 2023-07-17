const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('You need write something!');   //if we press the button it will show this alert
    }
    else{
        let li = document.createElement("li");   //HTML element will be created and stored in 'li' variable
        li.innerHTML = inputBox.value;          // the text which we add in the input field will be added in the li
        listContainer.appendChild(li);          // li will be displayed under this  
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value === '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");   //if we click the LI it will add the list items and if they are already present it will remove
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)  //it will save the data even after reloading the page
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")  // it ill show the taks which was already added after loading
}
showTask();