//Author : Ridho Saputra

// Variable
const density ="@%#*+=-:.        "


var text = '';

//Load Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Load Image
const img = new Image();
function previewFile() {
  text = '';
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      img.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
   
}
// img.src = './images.jpg'
img.addEventListener('load', ()=>{
  ctx.drawImage(img, 0,0,40,40)
  ascii()
});

 
// START
function ascii() {
    // Accsess all pixel data using loop
    for (let y = 0; y <40; y++){
        for (let x = 0; x < 40; x++){
            const pixel = ctx.getImageData(x,y,1,1)
            const data = pixel.data;
    
            // get the rgb value then find the average
            const avg = ( data[0] + data[1] + data[2] ) / 3;

            // map the avg value to ascii
            const len = density.length;
            const textIndex = Math.floor((avg * (len - 1)) / 255)

            // put the ascii into the text variable
            if (density[textIndex] == ' '){
                text += '&nbsp;'
              }else{text += density[textIndex];
              } 
        }
        text += '<br>' // '\n' 
    }
    
    document.getElementById('p').innerHTML = text
}

