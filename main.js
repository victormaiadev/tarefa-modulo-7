document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);
    const messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = 'Operação Realizada com sucesso!';
        messageDiv.className = 'message success';
        
        setTimeout(() => {
            document.getElementById('validationForm').reset();
            messageDiv.textContent = '';
            messageDiv.className = 'message';
        }, 4000);

    } else {
        messageDiv.textContent = 'Operação inválida!';
        messageDiv.className = 'message error';
    }
});

