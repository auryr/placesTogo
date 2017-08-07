console.log('main.js is connected');

function hideElements(e) {
  const divToHide = e.target.getAttribute("hideDiv");
  const dateToVal = e.target.getAttribute("valDate");
  let hiddenDiv=document.getElementById(divToHide);


  let dateEl=document.getElementById(dateToVal);
  if (dateEl.value==""){
  }
  else{
    hiddenDiv.style.display = "none";
  }
  console.log(dateEl.value);
}

function addClick() {
  const buttons = document.querySelectorAll('.addPlace');
  buttons.forEach(button => {
      button.addEventListener('click', handler = function(e) {
        hideElements(e);
      });

  })
}

document.addEventListener('DOMContentLoaded',function(){
    addClick()
});
