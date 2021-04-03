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
        $("form.row-" + i).addClass(color);
        var storedEvent = localStorage.getItem("row-" + i);
        $(".row-" + i + " :input").val(storedEvent);
    }
}
updateTime();
$(".saveBtn").click(function() {
    var parentRow = $(this).parent().attr('id');
    var eventValue = $("." + parentRow + " :input").val()
    localStorage.setItem(parentRow, eventValue);
    updateTime();
  });
  
setInterval(updateTime, 20000);

});