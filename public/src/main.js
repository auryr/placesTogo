// console.log('main.js is connected');

// function completeTodo(e) {
//   const todoId = e.target.dataset.id;
//   fetch(`/todos/${todoId}/complete`, {
//     method: 'PUT',
//     credentials: 'include',
//   }).then(res => res.json())
//     .then(jsonRes => {
//       e.target.innerHTML = 'Done!';
//       e.target.classList = 'done';
//       e.target.removeEventListener('click', handler);
//       console.log(jsonRes);
//     })
// }

// function getAllTodos() {
//   const todos = document.querySelectorAll('span.not-done');
//   todos.forEach(todo => {
//     todo.addEventListener('click', handler = (e) => completeTodo(e));
//   })
// }

// document.addEventListener('DOMContentLoaded', getAllTodos);
