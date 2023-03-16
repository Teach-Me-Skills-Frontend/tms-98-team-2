let clock = document.querySelector('.clock');

function time() {
   let date = new Date();
   let hours = date.getHours();
   let min = date.getMinutes();
   let year = date.getFullYear();
   let mounch = date.getMonth();
   let day = date.getDate();

   clock.innerHTML = `${hours}:${min} 
   ${day}:${mounch}:${year}`
}
setInterval (time, 1000);