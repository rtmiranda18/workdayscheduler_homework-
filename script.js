$(document).ready(function () {

// input current time using moment js function
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));



var i = 9;
let updateTime = function () {
    let currentTime = moment().format('H');
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
        var workTime = i + ":00:00";
        $(".row-" + i + " :input, form.row-" + i).addClass(color);
        //$("form.row-9").addClass(color);
        // moment(workTime, "HH:mm:ss").format("hA")
        var storedEvent = localStorage.getItem("row-" + i);
        console.log(storedEvent);
        $(".row-" + i + " :input").val(storedEvent);
    }
}

$(".saveBtn").click(function() {
    var parentRow = $(this).parent().attr('id');
    var eventValue = $("." + parentRow + " :input").val()
    localStorage.setItem(parentRow, eventValue);
  });
  

function saveEvent(rowhour) {
    var event = $("." + rowhour + " > :input").val();

    localStorage.setItem("test", event);
    console.log(localStorage);

}
setInterval(updateTime, 1000);

// Store Data
//localStorage.setItem("test", "this");
//console.log(localStorage);
// Retrieve Data
//document.getElementById("result").innerHTML = localStorage.getItem("test");
});