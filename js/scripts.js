//back end
function processNumber(input) {
  if (input % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    if (String(input).match(/1/)) {
      return "Boop!";
    } else {
      if (String(input).match(/0/)) {
        return "Beep!";
      } else {
        return input;
      }
    }
  }
}

function robotify(input) {
  if (!isNaN(input.charAt(0))) {
    for (var i = 0; i <= input; i++) {
      var result = processNumber(i);
      $(".result").append(result+"<br>");
    }
    $(".result").append("Dave, this conversation can serve no purpose anymore. Goodbye.");
  } else {
    alert("Please input a number");
  }
}

//front end
$(document).ready(function() {
  $("#robotifyButton").click(function() {
    $(".result").html('');
    var regularText = $("input").val();
    robotify(regularText);
  })
});
