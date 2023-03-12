
var Randomnumber1 = Math.floor(Math.random() * 6) + 1;
var Randomimage = "dice" + Randomnumber1 + '.png';
var Randomimagesource = 'Discee challenge/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/' + Randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",Randomimagesource);


var Randomnumber2 = Math.floor(Math.random() * 6) + 1;
var Randomimage2 = "dice" + Randomnumber2 + '.png';
var Randomimagesource2 = 'Discee challenge/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/' + Randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",Randomimagesource2);

if(Randomnumber1 > Randomnumber2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
}

else if(Randomnumber1 < Randomnumber2)
{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
}
else
{
    document.querySelector("h1").innerHTML = "IT'S A TIE";
}
