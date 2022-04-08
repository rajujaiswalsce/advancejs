
var member1 = "member-1"
var member2 = "member-2"


function rolldice(){
    setTimeout(function(){
        var x = Math.floor(Math.random() *6) + 1;
        var y = Math.floor(Math.random() *6) + 1;
        var z = Math.floor(Math.random() *6) + 1;
        document.querySelector("#img1").setAttribute(x)
        document.querySelector("#img2").setAttribute(y)
        document.querySelector("#img3").setAttribute(z)

        if(x===y  && y===z){
            document.querySelector("h1").innerHTML = "Draw"
        }else if(x>y && x>z){
            document.querySelector("h1").innerHTML = "win"
        }else{
            document.querySelector("h1").innerHTML = "win"
        }
    },2500)
}