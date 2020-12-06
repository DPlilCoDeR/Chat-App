const form = document.querySelector('form');

function writemessage (data) {
 const html = `
              <strong>${data.user}</strong>:                  
              <em>${data.text}</em>         
              `;
  let itemMessage = document.createElement('li')
  itemMessage.innerHTML = html;
  document.querySelector('#messages').append(itemMessage);
};

window.onload = function () {
  let socket = io();
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevents page reloading

    const message = {
      user: document.querySelector('#username').value,
      text: document.querySelector('#text').value
    };
    socket.emit('chat message', message);
    document.querySelector('#text').value = '';
    return false;});

    socket.on('chat message', (msg) => {
      console.log(msg);
      writemessage(msg);
  });
};