var displayTime = document.querySelector("#currentDay");

var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", funtion() {
    var value = $(this).signlings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time /* row id */, value);
});

//9am
$("#9am-row .description").val(localStorage.getItem("9am-row"));

//10am
$("#10am-row .description").val(localStorage.getItem("10am-row"));

//11am
$("#11am-row .description").val(localStorage.getItem("11am-row"));

//12pm
$("#12pm-row .description").val(localStorage.getItem("12pm-row"));

//1pm
$("#1pm-row .description").val(localStorage.getItem("1pm-row"));

//2pm
$("#2pm-row .description").val(localStorage.getItem("2pm-row"));

//3pm
$("#3pm-row .description").val(localStorage.getItem("3pm-row"));

//4pm
$("#4pm-row .description").val(localStorage.getItem("4pm-row"));

//5pm
$("#5pm-row .description").val(localStorage.getItem("5pm-row"));

// converting time and display:

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

var currentHour = moment().format('H');

//9am

//10am

//11am

//12pm

//1pm

//2pm

//3pm

//4pm

//5pm