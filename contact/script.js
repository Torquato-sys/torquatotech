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
        assunto: document.getElementById('subject').value,
        emaildestinatario: document.getElementById('email').value,
        fullname: document.getElementById('fullname').value,
        mobile: document.getElementById('mobile').value, // Adicionado para incluir o campo 'mobile'
        message: document.getElementById('message').value // Alterado de 'mensagem' para 'message'
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    fetch('http://127.0.0.1:5000/enviar_email', requestOptions)
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
