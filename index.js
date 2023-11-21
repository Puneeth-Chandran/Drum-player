
var button= document.querySelectorAll(".drum").length

for(let i=0;i<=button;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       this.style.color="white"
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    })
}
