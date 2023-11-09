var p1 = prompt("Blue Player 1 enter your name:");
var p1c = "blue";

var p2 = prompt("Red Player 2 enter your name:");
var p2c = "red";

var game_on = true;

var table = $("table tr");

function win(row, col) {
  console.log("you won");
  console.log(row);
  console.log(col);
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
    if (colorReport === "grey") {
      return row;
    }
  }
}

function colorMatch(one, two, three, four) {
  return (
    one === two &&
    one === three &&
    one === four &&
    one !== "grey" &&
    one !== undefined
  );
}

function horizontal() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
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
    for (var row = 0; row < 6; row++) {
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
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 6; row++) {
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
