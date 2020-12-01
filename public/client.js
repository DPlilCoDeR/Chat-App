const form = document.querySelector('form');
const m = document.querySelector('#m');

window.onload = function () {
  let socket = io();
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', m.value);
    document.querySelector('#m').value = '';
    return false;});

    socket.on('chat message', function(msg){
      const listItem = document.createElement('li')
      const messageItem = msg;
      listItem.append(messageItem);
      document.querySelector('#messages').append(listItem);
  });
};
