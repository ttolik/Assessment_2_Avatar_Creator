var color = document.getElementById("color"),
    preview = document.getElementById("preview"),
    myColor = null,
    button2 = document.getElementById("button2"),
    button1 = document.getElementById("button1"),
    range1 = document.getElementById("range1"),
    range2 = document.getElementById("range2"),
    range3 = document.getElementById("range3"),
    range4 = document.getElementById("range4"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    button4 = document.getElementById("button4"),
    display = document.getElementById("display"),
    button3 = document.getElementById("button3");

color.addEventListener("change", function(){
    myColor = color.value;
    preview.style.backgroundColor = myColor;
});

button2.addEventListener("click", function(){
    range1.type = "number";
    range2.type = "number";
    range3.type = "number";
    range4.type = "number";
});

button1.addEventListener("click", function(){
    range1.type = "range";
    range2.type = "range";
    range3.type = "range";
    range4.type = "range";
});

range1.addEventListener("change", function(){
    hair.style.width = range1.value+"%";
});

range2.addEventListener("change", function(){
    eyes.style.width = range2.value+"%";
});

range3.addEventListener("change", function(){
    nose.style.width = range3.value+"%";
});

range4.addEventListener("change", function(){
    mouth.style.width = range4.value+"%";
});



button4.addEventListener("click", function(){
    var ndiv = document.createElement("div");
    ndiv.style.width = 100+"px";
    ndiv.style.height = 100+"px";
    ndiv.style.display = "inline-block";
    ndiv.style.backgroundColor = preview.style.backgroundColor;
    var nimg1 = document.createElement("img"),
        nimg2 = document.createElement("img"),
        nimg3 = document.createElement("img"),
        nimg4 = document.createElement("img");
    ndiv.appendChild(nimg1);
    ndiv.appendChild(nimg2);
    ndiv.appendChild(nimg3);
    ndiv.appendChild(nimg4);
    
    nimg1.src = hair.src;
    nimg1.style.width = hair.style.width;
    nimg1.style.left = 0;
    nimg1.style.right = 0;
    nimg1.style.margin = "auto";
    nimg1.style.top = hair.style.top;
    nimg1.style.display = "block";
    
    nimg2.src = eyes.src;
    nimg2.style.width = eyes.style.width;
    nimg2.style.left = 0;
    nimg2.style.right = 0;
    nimg2.style.margin = "auto";
    nimg2.style.top = eyes.style.top;
    nimg2.style.display = "block";
    
    nimg3.src = nose.src;
    nimg3.style.width = nose.style.width;
    nimg3.style.left = 0;
    nimg3.style.right = 0;
    nimg3.style.margin = "auto";
    nimg3.style.top = nose.style.top;
    nimg3.style.display = "block";
    
    nimg4.src = mouth.src;
    nimg4.style.width = mouth.style.width;
    nimg4.style.left = 0;
    nimg4.style.right = 0;
    nimg4.style.margin = "auto";
    nimg4.style.top = mouth.style.top;
    nimg4.style.display = "block";

    display.appendChild(ndiv);
});

button3.addEventListener("click", function(){
    var hairNum = Math.round(1+Math.random()*2),
        eyesNum = Math.round(1+Math.random()*2),
        noseNum = Math.round(1+Math.random()*2),
        mouthNum = Math.round(1+Math.random()*2),
        r = Math.round(Math.random()*255),
        g = Math.round(Math.random()*255),
        b = Math.round(Math.random()*255);
    hair.src = "img/hair"+hairNum+".png";
    eyes.src = "img/eyes"+eyesNum+".png";
    nose.src = "img/nose"+noseNum+".png";
    mouth.src = "img/mouth"+mouthNum+".png";
    preview.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    var r1 = Math.round(Math.random()*70),
        r2 = Math.round(Math.random()*40),
        r3 = Math.round(Math.random()*30),
        r4 = Math.round(Math.random()*35);
    range1.value = r1;
    range2.value = r2;
    range3.value = r3;
    range4.value = r4;
    hair.style.width = r1+"%";
    eyes.style.width = r2+"%";
    nose.style.width = r3+"%";
    mouth.style.width = r4+"%";
});