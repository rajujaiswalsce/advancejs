





let movies_div = document.getElementById("movies");

async function searchMovies(n){
    let res = await fetch(`http://www.omdbapi.com/?s=${n}&apikey=440dd902`);
    let data = await res.json();
    console.log(data)
  return data.Search
}



async function mainFunction(){         
      let name = document.getElementById("select").value;
    //  console.log(name)
    if(name.length < 3){
      return false;
    }
    let movies =  await searchMovies(name);
  //  console.log(movies)
    appendMovies(movies)
  }

function appendMovies (m){
m.forEach ( ({Title}) =>{
  let p = document.createElement("p");
  p.innerText = Title;
  movies_div.append(p)
});
}

