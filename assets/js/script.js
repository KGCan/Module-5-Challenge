// Variable for current date
var todaysDate = moment().format('dddd, MMM Do YYYY');
// Display current date using JQuery
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    // click listener for save button
    $(".saveBtn").on("click", function () {
        // Pull nearby values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text entered into time blocks in local storage
        localStorage.setItem(time, text);
    })
   
// Function to track the timeblocks
    function timeTracker() {
        // current hour
        var timeNow = moment().hour();

        // loop over timeblocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // check the current time and add background colors
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Pull data from local storage if any has been input
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // Call function to operate timeblocks
    timeTracker();
})