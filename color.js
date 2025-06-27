

const button = document.getElementById("changeColorBtn");

const colorCodeText = document.getElementById("colorcode");

button.addEventListener("click", function (){
  
    const randomColor = getRandomColor(); 

   document.body.style.backgroundColor = randomColor;
    

    colorCodeText.textContent = randomColor;
} );


// Function to generate a random HEX color

function getRandomColor(){

 const hex = "0123456789ABCDEF";
 let color = "#";

for (let i= 0; i < 6; i++) {

   color += hex[Math.floor(Math.random() * 16)]


}

return color;

}