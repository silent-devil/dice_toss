var p1 = "player1";
var p2 = "player2";

function player_name() {

    p1 = prompt("enter the name of player 1");
    p2 = prompt("enter the name of player 2");
    if (p1 != "")
        document.getElementsByClassName("pl")[0].innerHTML = p1;
    else
        p1 = "player 1";

    if (p2 != "")
        document.getElementsByClassName("pl")[1].innerHTML = p2;
    else
        p2 = "player 2";

}
player_name();

function dice_logic() {
    var a = Math.random();
    var b = Math.random();
    var num1 = Math.floor(a * 6 + 1);
    var im = "images/dice" + num1 + ".png";
    var loc = document.querySelectorAll("img")[0];
    loc.setAttribute("src", im);

    var num2 = Math.floor(b * 6 + 1);
    var im = "images/dice" + num2 + ".png";
    var loc1 = document.querySelectorAll("img")[1];
    loc1.setAttribute("src", im);

    if (num1 > num2)
        document.getElementById("winner").innerHTML = p1 + " IS WINNER";
    else if (num1 < num2)
        document.getElementById("winner").innerHTML = p2 + " IS WINNER";
    else
        document.getElementById("winner").innerHTML = "ITS A DRAW PLEASE TRY AGAIN";
}