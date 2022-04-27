import navbar  from "../components/navbar";

document.getElementById("navbar").innerHTML = navbar();


let getData = async () =>{
    try{
        let res = fetch("https://fakestoreapi.com/products/category/electronics");
        let data = await res.json();
        console.log(data)
    }catch(err){
        console.log(err)
    }

}
getData();

let append = (data) => {
    let container = document.getElementById("products");

    data.forEach((title)=>{
   let p = document.createElement("p");
   p.innerText = title;
   container.append(p)
    })
}