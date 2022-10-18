const element = document.getElementById('9element');
const add = document.getElementById('add')
const images = document.getElementById('images')
const secondElement = document.querySelector("#element2");

element.onclick = () => {
  if (element.style.backgroundColor == "yellow") {
    element.style.backgroundColor = "green";
    element.style.color = "black"
  }
  else {
    element.style.backgroundColor = "yellow";
    element.style.color = "red" 
  }
}


secondElement.onclick = () => {
  if (secondElement.style.backgroundColor == "red") {
    secondElement.style.backgroundColor = "black";
    secondElement.style.color = "red";
  }
  else {
    secondElement.style.backgroundColor = "red";
    secondElement.style.color = "white";
  }
} 


add.onclick = () => {
  let pic = document.createElement('img');
  pic.className = 'img';
  pic.src = 'vancouver.jpg';
  images.appendChild(pic);
}
increase.onclick = () =>{
  document.querySelectorAll('.img').forEach(img => {
    img.style.width = img.offsetWidth + 50 + 'px';
  })
}


reduce.onclick = () =>{
  document.querySelectorAll('.img').forEach(img => {
    img.style.width = img.offsetWidth - 50 + 'px';
  })
}
remove.onclick = () =>{
  images.removeChild(images.lastChild);
}
