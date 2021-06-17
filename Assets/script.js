//variable to create clock display
var time = moment().format('dddd, MMMM do YYYY, h:mm:ss a')

//variable that will help to link to each variable hour
var hours = moment().hours();

$('#currentDay').html(moment().format('dddd, MMMM do YYYY, h:mm:ss a'));
// Creates live clock
function update() {
  $('#currentDay').html(moment().format('dddd, MMMM do YYYY, h:mm:ss a'));
}
setInterval(update,1000);

$(".time-slot").each(function(){
  var currentTime = parseInt($(this).attr("id").split("_")[1]);
  console.log(currentTime);

  if(currentTime === hours){
    console.log("Equal");
    $(this).childern(".description").addClass("current-time");
  }else if(currentTime < hours){
    $(this).childern(".description").addClass("past-time");
  }else{
    $(this).childern(".description").addClass("future-time");
  }
})

//Save Button/Event Listener and Function
$(document).on('click',"saveBtn", function(event) {
  event.preventDefault();
  var hour = $(this).siblings("description").val();
  var times = $(this).parent().attr("id");
  localStorage.setItem(times,hour);
})

// load any saved data from localStorage
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-1 .description').val(localStorage.getItem('hour-1'));
$('#hour-2 .description').val(localStorage.getItem('hour-2'));
$('#hour-3 .description').val(localStorage.getItem('hour-3'));
$('#hour-4 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));
$('#hour-6p .description').val(localStorage.getItem('hour-6p'));
  
  
  