

const arr = ['paper', 'rock', 'scissors'];
document.getElementById("after-choice").style.display = 'none';
document.getElementById("result").style.display = 'none';
var score = 0;
document.getElementById("score-num").innerText = score+"";

function Clicked( Userschoice) {
    var HouseSelected = arr[Math.floor(Math.random() * 3)];
    var imgUrlUser = "images/icon-" + Userschoice + ".svg";
    var imgUrlHouse = "images/icon-" + HouseSelected + ".svg";
    document.getElementById('before-choise').style.display = 'none';
    document.getElementById("imgsUser").src = imgUrlUser;
    document.getElementById("imgsUser").classList.add('img-'+Userschoice);
    setTimeout(() => {
        document.getElementById("imgsHouse").src = imgUrlHouse
        document.getElementById("imgsHouse").classList.add('img-'+HouseSelected);
    }, 250);

    document.getElementById("after-choice").style.display = 'flex';

    setTimeout(() => {
        var s = CheckWinner(Userschoice,HouseSelected);
        document.getElementById("result").style.display = 'block';
        document.getElementById("houseSELECTS").className = 'col-4';
        document.getElementById("userSELECTS").className = 'col-4';
        score = score + s;
        document.getElementById("score-num").innerHTML = score;
    }, 1000);
}//clicked function

function CheckWinner(user,house){
    var userIndex = arr.indexOf(user);
    var houseIndex = arr.indexOf(house);
    var res;
    var s=0;
    if(userIndex === houseIndex){
        res= "Draw";
    } else if( (houseIndex-userIndex) === -2 || (houseIndex-userIndex) === 1){
        res = "YOU WIN";
        s=1;
    } else {
        res = "YOU LOST";
        s=-1;
    }
     document.getElementById("result-h3").innerHTML= res;        
    return s;
}

function playAgain(){
    document.getElementById('before-choise').style.display = 'flex';
    document.getElementById("after-choice").style.display = 'none';
    document.getElementById("imgsHouse").src = "";
    document.getElementById("result").style.display = 'none'; 
    document.getElementById('imgsHouse').className = 'img1';
    document.getElementById("imgsUser").className = 'img1';
    document.getElementById("houseSELECTS").className = 'col-6';
    document.getElementById("userSELECTS").className = 'col-6';
}


//*******************************************************
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
//*******************************************************
