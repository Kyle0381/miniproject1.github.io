let x = 0;
let getAllButtons = document.querySelectorAll('[name = "meaning"], [name = "headerSyntax"], [name = "paragraphSyntax"]');
// let getAllCorrectAnswer = document.getElementsByClassName("correct");
function addScore(){
 x++;
 return x;
}
function getScore(){
    getScoreSpace = document.querySelector(".scoring-border").innerHTML = x;

    for(i = 0; i < getAllButtons.length; i++){
        getAllButtons[i].checked = false;
    }
    document.getElementById("submit").style.display = "none";
    document.getElementById("clear").style.display = "flex";
    document.getElementById("clear").style.justifyContent = "center";
}
function clearScore(){
    document.getElementById("scorer").innerHTML = 0;
}


