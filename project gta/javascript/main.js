let btns = document.querySelectorAll("*[data-modal-btn]");

for(let i = 0; i <btns.length; i++){
    btns[i].addEventListener('click',function() {
       let name = btns[i].getAttribute('data-modal-btn')
       let modal = document.querySelector("[data-modal-window='"+name+"']")
       modal.style.display = "flex";
       let close =modal.querySelector(".close__modal")
       close.addEventListener('click' , function (){
           modal.style.display = "none"
       })
    })
}

window.onclick = function (e) {
    if(e.target.hasAttribute("data-modal-window")){
        let modals = document.querySelectorAll("*[data-modal-window]")
        for(let i = 0; i < modals.length; i++){
            modals[i].style.display = "none";
        }
    }
}