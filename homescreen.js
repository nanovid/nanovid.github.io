var slidercontent = document.getElementById("box");
//list of images to display
var image = ["qnc", "vibration", "arduinotemp"];

var i = image.length

//next slide function

function nextImage(){
       if (i < image.length){
              i = i+1;
       }
       else{
              i = 1;
       }
       slidercontent.innerHTML = "<img src =images/" +image[i-1]+ ".jpg>"
}

function previousImage(){
       if (i < image.length + 1 && i > 1){
              i = i-1;
       }
       else{
              i = image.length;
       }
       slidercontent.innerHTML = "<img src =images/" +image[i-1]+ ".jpg>"
}