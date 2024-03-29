
//variable to create clock display
var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

//variable that will help to link to each variable hour
var hours = moment().hours();


$('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
// Creates live clock
function update() {
  $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update,1000);


$(".time-block").each(function(){
  var currentTime = parseInt($(this).attr("id").split("-")[1]);
  console.log(currentTime);

  if(currentTime === hours){
    console.log("Equal");
    $(this).children(".description").addClass("present");
  }else if(currentTime < hours){
    $(this).children(".description").addClass("past");
  }else{
    $(this).children(".description").addClass("future");
  }
})

//Save Button/Event Listener and Function
$(document).on('click',".saveBtn", function(event) {
  event.preventDefault();
  var hour = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time,hour);
})

// load any saved data from localStorage
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-1'));
$('#hour-14 .description').val(localStorage.getItem('hour-2'));
$('#hour-15 .description').val(localStorage.getItem('hour-3'));
$('#hour-16 .description').val(localStorage.getItem('hour-4'));
$('#hour-17 .description').val(localStorage.getItem('hour-5'));
$('#hour-18 .description').val(localStorage.getItem('hour-6p'));
  
  
  