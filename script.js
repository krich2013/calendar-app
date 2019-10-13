// Get current time
var currentTime = new moment().format("HH:mm");
console.log(currentTime);
var blockid = $(".time-block").attr("block");
var lowerValue = "";
var upperValue = "";
var lowerValueTime = "";
var upperValueTime = "";
var save1 = document.querySelector(".lock1");
var save2 = document.querySelector(".lock2");
var save3 = document.querySelector(".lock3");
var save4 = document.querySelector(".lock4");
var save5 = document.querySelector(".lock5");
var save6 = document.querySelector(".lock6");
var save7 = document.querySelector(".lock7");
var save8 = document.querySelector(".lock8");

var todoForm = document.querySelector(".text-area");
var todo1 = "";
var todo2 = "";
var todo3 = "";
var todo4 = "";
var todo5 = "";
var todo6 = "";
var todo7 = "";
var todo8 = "";

init();

// Retrieve user input from local storage for each task (total of 8)
function init() {
    var storedTodo1 = localStorage.getItem("todo1");
    if (storedTodo1 !== null) {
        todo1 = storedTodo1;
    }

    var storedTodo2 = localStorage.getItem("todo2");
    if (storedTodo2 !== null) {
        todo2 = storedTodo2;
    }

    var storedTodo3 = localStorage.getItem("todo3");
    if (storedTodo3 !== null) {
        todo3 = storedTodo3;
    }

    var storedTodo4 = localStorage.getItem("todo4");
    if (storedTodo4 !== null) {
        todo4 = storedTodo4;
    }

    var storedTodo5 = localStorage.getItem("todo5");
    if (storedTodo5 !== null) {
        todo5 = storedTodo5;
    }

    var storedTodo6 = localStorage.getItem("todo6");
    if (storedTodo6 !== null) {
        todo6 = storedTodo6;
    }

    var storedTodo7 = localStorage.getItem("todo7");
    if (storedTodo7 !== null) {
        todo7 = storedTodo7;
    }

    var storedTodo8 = localStorage.getItem("todo8");
    if (storedTodo8 !== null) {
        todo8 = storedTodo8;
    }

    renderTodos();
}

// Store each task as its own item
function storeTodos() {
    localStorage.setItem("todo1", todo1);
    localStorage.setItem("todo2", todo2);
    localStorage.setItem("todo3", todo3);
    localStorage.setItem("todo4", todo4);
    localStorage.setItem("todo5", todo5);
    localStorage.setItem("todo6", todo6);
    localStorage.setItem("todo7", todo7);
    localStorage.setItem("todo8", todo8);

}

// On page load, display each task to the user
function renderTodos() {
    $("#input1").text(todo1);
    $("#input2").text(todo2);
    $("#input3").text(todo3);
    $("#input4").text(todo4);
    $("#input5").text(todo5);
    $("#input6").text(todo6);
    $("#input7").text(todo7);
    $("#input8").text(todo8);
}

// Set up event listeners for each save event
save1.addEventListener("click", function(event) {
    event.preventDefault();
    var input1  = $("#input1").val().trim();
        if (input1 === "") {
            return;
        }
        
        todo1 = input1;
        storeTodos();
    })

save2.addEventListener("click", function(event) {
    event.preventDefault();
    var input2  = $("#input2").val().trim();
        if (input2 === "") {
            return;
        }
        
        todo2 = input2;
        storeTodos();
    })
    
save3.addEventListener("click", function(event) {
    event.preventDefault();
    var input3  = $("#input3").val().trim();
        if (input3 === "") {
            return;
        }
        
        todo3 = input3;
        storeTodos();
    })      

save4.addEventListener("click", function(event) {
    event.preventDefault();
    var input4  = $("#input4").val().trim();
        if (input4 === "") {
            return;
        }
        
        todo4 = input4;
        storeTodos();
    })      
    
save5.addEventListener("click", function(event) {
    event.preventDefault();
    var input5  = $("#input5").val().trim();
        if (input5 === "") {
            return;
        }
        
        todo5 = input5;
        storeTodos();
    })      
        
save6.addEventListener("click", function(event) {
    event.preventDefault();
    var input6  = $("#input6").val().trim();
        if (input6 === "") {
            return;
        }
        
        todo6 = input6;
        storeTodos();
    })      

save7.addEventListener("click", function(event) {
    event.preventDefault();
    var input7  = $("#input7").val().trim();
        if (input7 === "") {
            return;
        }
        
        todo7 = input7;
        storeTodos();
    })      

save8.addEventListener("click", function(event) {
    event.preventDefault();
    var input8  = $("#input8").val().trim();
        if (input8 === "") {
            return;
        }
        
        todo8 = input8;
        storeTodos();
    })      
    

// Compare current time to block
$('.time-block').each(function(i,el){
        lowerValue = $(el).attr("lower-value");
        upperValue = $(el).attr("upper-value");
        lowerValueTime = moment(parseInt(lowerValue),'HH').format("HH:mm");
        upperValueTime = moment(parseInt(upperValue),'HH').format("HH:mm");
        
        if (currentTime > lowerValueTime && currentTime < upperValueTime) {
            console.log("Turn this block red");
            var secondChild = $(el).find("textarea");
            secondChild.addClass("present");
        }
    
        else if (currentTime < lowerValueTime) {
            console.log("Turn this block green");
            var secondChild = $(el).find("textarea");
            secondChild.addClass("future");
        }
    
        else if (currentTime > upperValueTime) {
            console.log("Turn this block gray");
            var secondChild = $(el).find("textarea");
            secondChild.addClass("past");
    };    
})

// Store user input to local storage

