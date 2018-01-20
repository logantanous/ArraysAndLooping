//back end
function processNumber(input, name) {
  if (input % 3 === 0) {
    return "I'm sorry, "+name+". I'm afraid I can't do that.";
  }
  else {
    if (String(input).match(/1/)) {
      return "Boop!";
    }
    else {
      if (String(input).match(/0/)) {
        return "Beep!";
      } else {
        if (String(input).match(/4/)) {
          return "WeeWoo!";
        }
        else {
          return input;
        }
      }
    }
  }
}

function upperCaseWords (str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function robotify(input, name, movement) {
  var start = ", this conversation can serve no purpose anymore. Goodbye.";
  if (input == "" || name == "") {
    alert("Please fill out all input boxes")
  }
  else {
    if (!isNaN(input.charAt(0))) {
      if (movement == "forwards") {
        for (var i = 0; i <= input; i++) {
          var result = processNumber(i, name);
          $(".result").append(result+"<br>");
        }
        $(".result").append(name+start);
      }
      else {
        $(".result").append(name+start+"<br>");
        for (var i = input; i >= 0; i--) {
          var result = processNumber(i, name);
          $(".result").append(result+"<br>");
        }
      }
    }
  }
}

function submitText(movement) {
  $(".result").html('');
  var regularText = $("#robotInputBox").val();
  var nameBox = upperCaseWords($("#nameBox").val());
  robotify(regularText, nameBox, movement);
}


//front end
$(document).ready(function() {
  $("#robotifyButton").click(function() {
    submitText("forwards");
  })
  $("#robotifyBackwardsButton").click(function() {
    submitText("backwards");
  })
});
