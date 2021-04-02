$(document).ready(function () {

// input current time using moment js function
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$(".hour").text(moment().format("hA"));
});