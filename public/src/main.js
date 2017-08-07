console.log('main.js is connected');

function hideElements(e) {
  const divToHide = e.target.getAttribute("hideDiv");
  let hiddenDiv=document.getElementById(divToHide);
  hiddenDiv.style.display = "none";
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
