$(document).ready(function () {

// input current time using moment js function
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$(".hour").text(moment().format("hA"));


var i = 9;
let updateTime = function () {
    let currentTime = moment().format('H')
    // use a for loop to get the boxes to show colors 
    for(i=9; i < 19; i++) { 
        var d = currentTime; 
        if (i==d) {
            var color = "present";
        }
        else if (i > d) {
            var color = "future";
        }
        else if (i < d) {
            var color = "past";
        } 
        // concatinate container
        var workTime = i + ":00:00";
        //$(".container").append(
            //'<div class="row"><div class="hour">' + moment(workTime, "HH:mm:ss").format("hA") + '</div><form class="' + color + '"><input class="' + color + '" type="text" id="event" name="event"></form><button class="saveBtn">Save</button></div>'
        );
    }
}
setInterval(updateTime, 100);

// Store Data
localStorage.setItem("test", "this");
console.log(localStorage);
// Retrieve Data
//document.getElementById("result").innerHTML = localStorage.getItem("test");
});