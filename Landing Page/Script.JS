document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;
        const formMessage = document.getElementById('form-message');
           if (name && email && message) {
             formMessage.textContent = 'Thank you for your message, ' + name +' ! We will get back to you short
             formMessage.style.color ='green';
             document.getElementById('contact-form').reset();
          } else {
               formMessage.textContent = 'Please fill out all fields.';
               formMessage.style.color = 'red';
           }
       } );