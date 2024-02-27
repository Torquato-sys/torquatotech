/*========================= toggle icon navbar ========================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========================= scroll reveal ========================*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.contact', { origin: 'top' });



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário de enviar uma solicitação de atualização

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    fetch('http://localhost:5000/submitform', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar o formulário.');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); // Exibir a mensagem de sucesso retornada pela API
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});



