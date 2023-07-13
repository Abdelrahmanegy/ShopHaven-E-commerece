document.addEventListener("DOMContentLoaded",function(){

  let btnContainer = document.getElementById("btn-container");

  btnContainer.addEventListener("mouseover",function(e){
    if (e.target.classList.contains("btn")){
        let activebtn = btnContainer.querySelector(".btn.active");
        if (activebtn){
            activebtn.classList.remove("active")
        }

        e.target.classList.add("active");
    }
  })
   
})