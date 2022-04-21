
  let img = document.getElementById("image");
function orderFood() {
    let order = document.getElementById("food").value;
  
    let status = "open";
  
    let mypromise = new Promise(function (resolve, reject) {
      let time = Math.random() * 10 * 1000;
  
      setTimeout(function () {
        if (status === "open") {
          resolve(order);
        } else {
          reject();
        }
      }, time);
    });
  

    mypromise
  .then(function (res) {
    console.log("res:", res);
    image.src =
      "https://b.zmtcdn.com/data/pictures/chains/1/19364681/6b1f4cde1bbdcae4d32c8ce2d5103ef7.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*";
  })
  .catch(function (err) {
    console.log("this is my err:", err);
  });
   
  
}




