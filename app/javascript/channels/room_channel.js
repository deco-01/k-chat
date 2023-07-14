import consumer from "./consumer"

const appRoom = consumer.subscriptions.create("RoomChannel", {

  received(data) {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.innerHTML = data['message'];
    messages.appendChild(messageElement);
    
    setTimeout(() => {
      messages.removeChild(messageElement);
    }, 10000);
  },

  speak: function(message) {
    return this.perform('speak', {message: message});
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const messages = document.getElementById('messages');
  messages.innerHTML = '';

  const inputField = document.getElementById('input');
  const sendButton = document.querySelector('.send-button');

  inputField.addEventListener('input', function() {
    const inputValue = inputField.value.trim();
    let messageToSend = '';

    if (inputValue === 'fujii') {
      messageToSend = 'イケメン';
    } else if (inputValue === '藤井さん') {
      messageToSend = 'イケメン';
    } else if (inputValue === 'thank you') {
      messageToSend = 'ありがとう';
    }

    if (messageToSend !== '') {
      sendButton.classList.add('active');
    } else {
      sendButton.classList.remove('active');
    }
  });

  window.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
      const inputValue = inputField.value.trim();
      let messageToSend = inputValue;

      if (inputValue === 'fujii') {
        messageToSend = 'イケメン';
      } else if (inputValue === '藤井さん') {
        messageToSend = 'イケメン';
      } else if (inputValue === 'thank you') {
        messageToSend = 'ありがとう';
      }

      if (messageToSend !== '') {
        appRoom.speak(messageToSend);
        inputField.value = '';
        sendButton.classList.remove('active');
        e.preventDefault();
      }
    }
  });
});