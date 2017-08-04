console.log('main.js is connected');

function addToDatabase() {



}


window.load=function() {
  const create = document.getElementById('submit');
    create.addEventListener('click',function(){
      addToDatabase();
    });
};
