/*圖片輪播*/
let a = 0, imgarr = new Array();
imgarr[0] = "https://i.imgur.com/vqNBt5q.jpg";
imgarr[1] = "https://i.imgur.com/4apjzvH.jpg";
imgarr[2] = "https://i.imgur.com/0gL4aEl.jpg";

function showimg(){
  document.getElementById("ico").src = imgarr[a];
  a = (a+1) % 3;
}

function show(){
  setInterval(showimg, 2000);
}
/*公佈欄*/
let title = document.getElementById("title");
let contents = document.getElementById("contents");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div id="news">
    <h2>${title.value}</h2>
    <p>${contents.value}</p>
  </div>
  `;
  title.value = "";
  contents.value = "";
}