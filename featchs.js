
const containerName = document.getElementById("container");
// const url = "https://reqres.in/api/users?page=2";
const url = "https://fakestoreapi.com/products";

//  let x = fetch(url)

// console.log(x)


fetch(url)
.then(function(res){
  return res.json();
})
.then(function(res){
  // console.log(res)
  appendDa(res);
})
.catch(function(err){
   console.log(err);
});
   



function appendDa(data){

data.forEach(function(el){

  let div = document.createElement("div")

let title = document.createElement("p")
title.innerText = el.title;

let price = document.createElement("p")
price.innerText = el.price;

let image = document.createElement("img")
image.src = el.image;

div.append(image,title,price,);
containerName.append(div);

})


}



