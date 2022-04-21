
function dicegame(){
    var member1 = Math.floor(Math.random()*6) + 1;
    var member1imge = "image/dice" + member1 + ".png" ;

    var member2 = Math.floor(Math.random()*6) + 1;
    var member2imge = "image/dice" + member2 + ".png" ;

    var member3 = Math.floor(Math.random()*6) + 1;
    var member3imge = "image/dice" + member3 + ".png" ;

    var images1 = document.querySelectorAll("img")[0];
    images1.setAttribute("src",member1imge);

    var images2 = document.querySelectorAll("img")[1];
    images2.setAttribute("src",member2imge);

    var images3 = document.querySelectorAll("img")[2];
    images3.setAttribute("src",member3imge);


    if(member1>member2 && member1>member3){
        document.querySelector("h1").innerHTML="<span style='color:green;'>member-1 is winner</span>"
    }else if(member1<member2 && member2>member3){
        document.querySelector("h1").innerHTML="<span style='color:yellow;'>member-2 is winner</span>"
    }else if(member3>member2 && member3>member1){
        document.querySelector("h1").innerHTML="<span style='color:red;'>member-3 is winner</span>"
    }else if(member3==member2 && member3==member1){
        document.querySelector("h1").innerHTML="<span style='color:blue;'>Draw</span>"
    }
}
document.querySelector("button").addEventListener("click",dicegame)