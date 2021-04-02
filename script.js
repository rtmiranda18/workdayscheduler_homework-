$(document).ready(function () {

// input current time using moment js function
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$(".hour").text(moment().format("hA"));

for(i=9; i < 19; i++){
    var d = moment(); 
    if (i==d.format("H")) {
        var color = "red";
    }
    else if (i > d.format("H")) {
        var color = "green";
    }
    else if (i < d.format("H")) {
        var color = "gray";
    }
    //console.log(i + " = " + color); 
    var workTime = i + ":00:00";
    $(".color").append("<span>" + moment(workTime, "HH:mm:ss").format("hA") + " = " + color + "</span>");
}
});