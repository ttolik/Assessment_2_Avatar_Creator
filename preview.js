/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var numH = 1,
    numE = 1,
    numN = 1,
    numM = 1;
    
hair.addEventListener("click", function(){
    if(numH >= 3){
        numH = 1;
    } else {
        numH++;
    }
    hair.src = "img/hair"+numH+".png";
});    
    
eyes.addEventListener("click", function(){
    if(numE >= 3){
        numE = 1;
    } else {
        numE++;
    }
    eyes.src = "img/eyes"+numE+".png";
}); 

nose.addEventListener("click", function(){
    if(numN >= 3){
        numN = 1;
    } else {
        numN++;
    }
    nose.src = "img/nose"+numN+".png";
});  

mouth.addEventListener("click", function(){
    if(numM >= 3){
        numM = 1;
    } else {
        numM++;
    }
    mouth.src = "img/mouth"+numM+".png";
});