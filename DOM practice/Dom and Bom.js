// example 1
// if we use function and console.log(this) then it will refer current context 
// but if we use => function then it will refer global this (windows) in the browser

document
    .getElementById("changeTextButton")
    .addEventListener('click', function () {
        let myPara = document.getElementById("myParagraph");
        myPara.textContent = "The Paragraph is changed."
    }
)

// example 2 
document.getElementById("highlightFirstCity")
.addEventListener('click',function () {
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight")
})

// example 3
document.getElementById("changeOrder").addEventListener('click',function () {
    let newOrder = document.getElementById("coffeeType")
    newOrder.textContent = "Espresso";
    // newOrder.style.backgroundColor = "red";
    // newOrder.style.padding = "5px";
})

// Example 4 
document.getElementById("addNewItem").addEventListener('click',function () {
    let newItem = document.createElement("li")
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem);
})

//Example 5
document.getElementById("removeLastTask").addEventListener('click', function () {
    let tasklist = document.getElementById("taskList")
        tasklist.lastElementChild.remove();
})

// example 6
document.getElementById("clickMeButton").addEventListener('dblclick',function () {
    alert("Hello From Bavnit Singh");
})
// example 7
document.getElementById("teaList").addEventListener('click', function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("You have selected : " + event.target.textContent)
    }
})

// example 8
document.getElementById("feedbackForm").addEventListener("submit",function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;
    document.getElementById("feedbackDisplay").style.backgroundColor = "blue";
})

// example 9
document.addEventListener('DOMContentLoaded',function () {
    document.getElementById("domStatus").textContent = "DOM is Fully Loaded."
})

// example 10
document.getElementById("toggleHighlight").addEventListener('click',function () {
    let txt = document.getElementById("descriptionText")
    txt.classList.toggle("highlight");
})