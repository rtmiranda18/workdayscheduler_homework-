$(document).ready(function () {

// input current time using moment js function
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$(".hour").text(moment().format("hA"));

// use a for loop to get the boxes to show colors 
for(i=9; i < 19; i++){
    var d = moment(); 
    if (i==d.format("H")) {
        var color = "present";
    }
    else if (i > d.format("H")) {
        var color = "future";
    }
    else if (i < d.format("H")) {
        var color = "past";
    } 
    var workTime = i + ":00:00";
    $(".container").append(
        '<div class="row"><div class="hour">' + moment(workTime, "HH:mm:ss").format("hA") + '</div><form class="' + color + '"><input class="' + color + '" type="text" id="event" name="event"></form><button class="saveBtn">Save</button></div>'
        
    
        //'<span>' +  + " = " + color + '</span>'
    
    );

}

});