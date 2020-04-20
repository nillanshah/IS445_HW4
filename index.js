var size = 30;
  
  // Access the button
const balloon = document.getElementById("balloon");
  // Listen to the "click" event
balloon.innerHTML = "<span style = 'font-size:" + size +  "px;'>&#127880</span>"

document.addEventListener("keypress", keyboardInput);
  
function keyboardInput(e) {
    if (`${String.fromCharCode(e.charCode)}` == 'i' || `${String.fromCharCode(e.charCode)}` == 'I'){
        size = size + 10;
        if (size > 60){
            balloon.innerHTML = "<span style = 'font-size:" + size +  "px;'>&#128165</span>"    
            document.removeEventListener("keypress", keyboardInput)
        } else { 
            balloon.innerHTML = "<span style = 'font-size:" + size +  "px;'>&#127880</span>"    
        }
    } else if (`${String.fromCharCode(e.charCode)}` == 'd' || `${String.fromCharCode(e.charCode)}` == 'D'){
        size = size - 10;
        if (size <= 0){
            balloon.innerHTML = "<span style = 'font-size: 100px;'>Done</span>"
            document.removeEventListener("keypress", keyboardInput)
        } else {
        balloon.innerHTML = "<span style = 'font-size:" + size +  "px;'>&#127880</span>"   
        } 
    }
};