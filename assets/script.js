$(function () {
  var currentHour = moment().format("HH");
  var currentDate = moment().format("dddd, D MMMM");
  var workHours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
  ];
  $("#currentDay").text(currentDate);

  for (let i = 0; i < workHours.length; i++) {
    var timeOfDay = $("<div class='col-sm-1 hour'>").text(workHours[i] + "");
    var newRow = $("<div class='row'>");
    var inputArea = $(
      "<textarea class='description col-sm-10 time-block'>"
    );
    var saveButton = $("<button class='col-sm-1 saveBtn'>");
    var saveIcon = $("<i class='fas fa-save'>");
    saveButton.append(saveIcon);

    newRow.append(timeOfDay, inputArea, saveButton);
    $(".container").append(newRow);
  }

  $(document).on("click", ".saveBtn", function (event) {
    var storageHour = $(this).attr("data-hour");
    var storageText = $(this).siblings(".description").val();
 
  });
});
