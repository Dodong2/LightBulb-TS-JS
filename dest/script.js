"use strict";
const on = document.querySelector('.btn_on');
const off = document.querySelector('.btn_off');
if (on) {
    on.addEventListener("click", function () {
        const light_on = document.querySelector('.light_on');
        const light_off = document.querySelector('.light_off');
        if (light_off.style.display = "block") {
            light_on.style.display = "block";
            light_off.style.display = "none";
        }
    });
}
if (off) {
    off.addEventListener("click", function () {
        const light_on = document.querySelector('.light_on');
        const light_off = document.querySelector('.light_off');
        if (light_on.style.display === "block") {
            light_off.style.display = "block";
            light_on.style.display = "none";
        }
    });
}
// const on = document.querySelector('.btn_on') as HTMLButtonElement;
// const off = document.querySelector('.btn_off') as HTMLButtonElement;
// if(on) {
//     on.addEventListener("click", function(){
//         const action = document.querySelector('.action') as HTMLImageElement;
//         if (action.src = "light_off.png") {
//             action.src = "light_on.png";
//         }
//     })
// } 
// if(off) { 
//     off.addEventListener("click", function(){
//         const action = document.querySelector('.action') as HTMLImageElement;
//         if (action.src = "light_on.png") {
//             action.src = "light_off.png";
//         }
//     })
// }
