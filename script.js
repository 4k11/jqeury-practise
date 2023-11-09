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
    for (var col = 0; col < 7; col++){
        if (colorMatch(r))
    }
  }
}
