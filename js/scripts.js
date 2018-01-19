//back end
function processNumber(input, name) {
  if (input % 3 === 0) {
    return "I'm sorry, "+name+". I'm afraid I can't do that.";
  } else {
    if (String(input).match(/1/)) {
      return "Boop!";
    } else {
      if (String(input).match(/0/)) {
        return "Beep!";
      } else {
        if (String(input).match(/4/)) {
          return "WeeWoo!";
        } else {
          return input;
        }
      }
    }
  }
}

function robotify(input, name) {
  if (!isNaN(input.charAt(0))) {
    for (var i = 0; i <= input; i++) {
      var result = processNumber(i, name);
      $(".result").append(result+"<br>");
    }
    $(".result").append(name+", this conversation can serve no purpose anymore. Goodbye.");
  } else {
    alert("Please input a number");
  }
}

//front end
$(document).ready(function() {
  $("#robotifyButton").click(function() {
    $(".result").html('');
    var regularText = $("#robotInputBox").val();
    var nameBox = $("#nameBox").val();
    robotify(regularText, nameBox);
  })
});
