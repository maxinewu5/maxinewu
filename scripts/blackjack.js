document.getElementById("play").addEventListener("click", play);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stand").addEventListener("click", stand);

var win = false;
var bothstand = false;

var yourhandtotal;
var dealerhandtotal;

function play() {
    //reset vars
    yourhandtotal = 0;
    dealerhandtotal = 0;
    bothstand = false;
    win = false;

    //reset display
    document.getElementById("yourhand").innerHTML = "Your Hand: ";
    document.getElementById("dealerhand").innerHTML = "Dealer's Hand: ";
    document.getElementById("winner").innerHTML = "";

    //generate 2 cards for each player
    youCard();
    youCard();

    dealerCard();
    dealerCard();
}
function hit() {
    youCard();
    checkWin();
}
function stand() {
    //dealer algorithm: will stop after hitting 18
    while (dealerhandtotal < 18) {
        dealerCard();
        checkWin();
    }
    checkWin();
    bothstand = true;
    checkWin();
}

function checkWin() {
    console.log("checking win");
    var str = "";
    if (win) return;
    if (bothstand == false) {
        if (yourhandtotal == 21) str = "Blackjack! You Win!";
        if (dealerhandtotal == 21) str = "Blackjack! Dealer Wins!";
        if (yourhandtotal > 21) str = "Dealer Wins!"
        if (dealerhandtotal > 21)  str = "You Win!";
    } else {
        if (yourhandtotal == dealerhandtotal) str = "Tie!";
        if (yourhandtotal > dealerhandtotal) str = "You win!";
        if (dealerhandtotal > yourhandtotal) str = "Dealer Wins!";
    }
    if (str.localeCompare("") != 0) win = true;
    document.getElementById("winner").innerHTML = str;
}

function youCard() {
    if (win) return;
    var nextcard = Math.floor(Math.random() * 12) + 1;
    yourhandtotal += Math.min(nextcard, 10);
    if (nextcard == 11) nextcard = 'J';
    if (nextcard == 12) nextcard = 'Q';
    if (nextcard == 13) nextcard =  'K';
    document.getElementById("yourhand").innerHTML += nextcard + " ";
    document.getElementById("yoursum").innerHTML = "Your Sum: " + yourhandtotal;
}
function dealerCard() {
    console.log("dealing card to dealer");
    var nextcard = Math.floor(Math.random() * 12) + 1;
    dealerhandtotal += Math.min(nextcard, 10);
    console.log(dealerhandtotal);
    if (nextcard == 11) nextcard = 'J';
    if (nextcard == 12) nextcard = 'Q';
    if (nextcard == 13) nextcard =  'K';
    document.getElementById("dealerhand").innerHTML += nextcard + " ";
    document.getElementById("dealersum").innerHTML = "Dealer Sum: " + dealerhandtotal;
}