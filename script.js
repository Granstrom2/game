var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

let first = ""
let second = ""
let third = ""

function jump(){
    if(character.classList == "animate"){return}
    else{
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);

    }
  }

function crouch(){
    let char = document.getElementById("character")
    document.getElementById("character").style.height = "20px";
    document.getElementById("character").style.top= "180px";
    document.getElementById("block").style.top= "160px";
    document.getElementById("block").style.left= randomIntFromInterval;
}

function stand(){
    let char = document.getElementById("character")
    document.getElementById("character").style.height = "50px";
    document.getElementById("character").style.top= "150px";
    document.getElementById("block").style.top= "130px";
    document.getElementById("block").style.left= randomIntFromInterval;
}

document.addEventListener("keyup", function (event) {

    if (event.code === "ArrowDown"){
        stand();
        
    }
});

  // Kuben ska ligga för att croucha och ska stå upp när knappen släpps
    document.addEventListener("keydown", function (event) {
        console.log(event)
        if (event.code === "ArrowUp"){
            jump();
        }
        else if (event.code === "ArrowDown"){
            crouch();
        }
       
      
    });
    
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     if (blockLeft<70 && blockLeft>50 && characterTop>=130){
       block.style.animation = "none";
        alert("Game Over \nscore: "+Math.floor(counter/100) + "\nPress enter or space to restart" );
      counter=0;      
         block.style.animation = "block 1s infinite linear";
     }
     else{
         counter++;
         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
     }
}, 10);