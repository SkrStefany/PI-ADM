document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    //  enviar os dados para o backend para processamento
    
    
    
    var messageElement = document.getElementById('message');
    messageElement.textContent = 'Usuário cadastrado com sucesso!';
    });