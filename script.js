// Get current time
var currentTime = new moment().format("HH:mm");
console.log(currentTime);
var blockid = $(".time-block").attr("block");
var lowerValue = "";
var upperValue = "";
var lowerValueTime = "";
var upperValueTime = "";
var save1 = document.querySelector(".lock1");
var todoForm = document.querySelector(".text-area");
var todo1 = "";
var todo2 = "";
var todo3 = "";
var todo4 = "";
var todo5 = "";

init();

// Retrieve user input from local storage
function init() {
    var storedTodo1 = localStorage.getItem("todo1");

    if (storedTodo1 !== null) {
        todo1 = storedTodo1;
    }
    renderTodos();
}

function storeTodos() {
    localStorage.setItem("todo1", todo1);
}

function renderTodos() {
    console.log(todo1);
    $("input1").text(todo1);
}

save1.addEventListener("click", function(event) {
    event.preventDefault();
    var input1  = $("#input1").val().trim();
    console.log(input1);

        if (input1 === "") {
            return;
        }
        
        todo1 = input1;
        storeTodos();
    })
    
// Compare current time to block
$('.time-block').each(function(i,el){
    console.log(el)
        lowerValue = $(el).attr("lower-value");
        upperValue = $(el).attr("upper-value");
        lowerValueTime = moment(parseInt(lowerValue),'HH').format("HH:mm");
        upperValueTime = moment(parseInt(upperValue),'HH').format("HH:mm");
    
        console.log(blockid);
        console.log(lowerValue);
        console.log(upperValue);
        console.log(lowerValueTime);
        console.log(upperValueTime);
    
        if (currentTime > lowerValueTime && currentTime < upperValueTime) {
            console.log("Turn this block red");
            var textAreaAttribute = $(".textarea");
            textAreaAttribute.attr("class","present text-area");
        }
    
        else if (currentTime < lowerValueTime) {
            console.log("Turn this block green");
            var textAreaAttribute = $(".textarea");
            textAreaAttribute.attr("class","future text-area");
        }
    
        else if (currentTime > upperValueTime) {
            console.log("Turn this block gray");
            var textAreaAttribute = $(".textarea");
            textAreaAttribute.attr("class","past text-area");

    };    
})

// Store user input to local storage

