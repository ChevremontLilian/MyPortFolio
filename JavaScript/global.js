function redimensionTable(){
    let table = document.querySelector(".projectsGrid");
    if(window.innerWidth < 700){
        for(let i = 0; i < table.rows.length; i++){
          for(let j = 0; j < 5; j++){
             if(table.rows[i].cells[j].innerHTML == ""){
                table.rows[i].cells[j].style.display = "none";
             }else{
                table.rows[i].cells[j].style.display = "table-cell";
             }
          }
        }
    }else{
        for(let i = 0; i < table.rows.length; i++){
          for(let j = 0; j < 5; j++){
              table.rows[i].cells[j].style.display = "table-cell";
          }
        }
    }
}

function headerButtonToMenu(){
  let leftButton = document.querySelector("#leftHeaderButton");
  let rightButton = document.querySelector("#rightHeaderButton");
  let menuButton = document.querySelector("#menu");
    if (window.innerWidth < 500){
      leftButton.style.display = "none";
      rightButton.style.display = "none";
      menuButton.style.display = "block";
    }else{
      leftButton.style.display = "block";
      rightButton.style.display = "block";
      menuButton.style.display = "none";
    }
}


function openCloseNav(event) {
  event?.preventDefault?.();
  const nav = document.getElementById('navigation');
  const isHidden = nav.hasAttribute('hidden');
  if (isHidden) {
    nav.removeAttribute('hidden');
  } else {
    nav.setAttribute('hidden', '');
  }
}

function noNavBarNeeded(){
  const nav = document.getElementById('navigation');
  const isHidden = nav.hasAttribute('hidden');
  if(window.innerWidth > 500){
    nav.setAttribute('hidden', '');
  }
}

window.addEventListener("load", redimensionTable);
window.addEventListener("load", headerButtonToMenu);
window.addEventListener("load", noNavBarNeeded);
window.addEventListener("resize", noNavBarNeeded);
window.addEventListener("resize", headerButtonToMenu);
window.addEventListener("resize", redimensionTable);