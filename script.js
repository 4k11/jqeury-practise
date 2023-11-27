var p1 = prompt("Blue Player name:");
if (p1 == "") {
  var p1 = "Player 1";
}
var p1c = "rgb(86, 151, 255)";

var p2 = prompt("Red Player name:");
if (p2 == "") {
  var p2 = "Player 2";
}
var p2c = "rgb(237, 45, 73)";

var game_on = true;
var table = $("table tr");

function win(rown, coln) {
  console.log("you won");
  console.log(rown);
  console.log(coln);
}

function changeColor(rowInd, colInd, color) {
  return table
    .eq(rowInd)
    .find("td")
    .eq(colInd)
    .find("button")
    .css("background-color", color);
}

function reportColor(rowInd, colInd) {
  return table
    .eq(rowInd)
    .find("td")
    .eq(colInd)
    .find("button")
    .css("background-color");
}

function checkBottom(colInd) {
  var colorReport = reportColor(5, colInd);
  for (var row = 5; row > -1; row--) {
    colorReport = reportColor(row, colInd);
    if (colorReport === "rgb(128, 128, 128)") {
      return row;
    }
  }
}

function colorMatch(one, two, three, four) {
  return (
    one === two &&
    one === three &&
    one === four &&
    one !== "rgb(128, 128, 128)" &&
    one !== undefined
  );
}

function horizontal() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (
        colorMatch(
          reportColor(row, col),
          reportColor(row, col + 1),
          reportColor(row, col + 2),
          reportColor(row, col + 3)
        )
      ) {
        console.log("h passed");
        win(row, col);
        return true;
      } else {
        console.log("h failed");
        continue;
      }
    }
  }
}

function vertical() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (
        colorMatch(
          reportColor(row, col),
          reportColor(row + 1, col),
          reportColor(row + 2, col),
          reportColor(row + 3, col)
        )
      ) {
        console.log("v passed");
        win(row, col);
        return true;
      } else {
        console.log("v failed");
        continue;
      }
    }
  }
}

function diagonal() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (
        colorMatch(
          reportColor(row, col),
          reportColor(row + 1, col + 1),
          reportColor(row + 2, col + 2),
          reportColor(row + 3, col + 3)
        )
      ) {
        console.log("d passed");
        win(row, col);
        return true;
      } else if (
        colorMatch(
          reportColor(row, col),
          reportColor(row - 1, col + 1),
          reportColor(row - 2, col + 2),
          reportColor(row - 3, col + 3)
        )
      ) {
        console.log("d passed");
        win(row, col);
        return true;
      } else {
        console.log("d failed");
        continue;
      }
    }
  }
}

function gameOver(name) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $("h3").fadeOut("fast");
      $("h2").fadeOut("fast");
      $("h1")
        .text(name + " has won! Refresh your browser to play again!")
        .css("fontSize", "50px");
    }
  }
}
var currentPlayer = 1;
var currentName = p1;
var currentColor = p1c;

$("h3").text(p1 + " its your turn, click a column :)");

$(".board button").on("click", function () {
  var col = $(this).closest("td").index();

  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail, col, currentColor);

  if (horizontal() || vertical() || diagonal()) {
    gameOver(currentName);
  }

  currentPlayer = currentPlayer * -1;

  if (currentPlayer === 1) {
    currentName = p1;
    $("h3").text(currentName + " its your turn, click a column :)");
    currentColor = p1c;
  } else {
    currentName = p2;
    $("h3").text(currentName + " its your turn, click a column :)");
    currentColor = p2c;
  }
});
