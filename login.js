document.addEventListener('DOMContentLoaded', function () {
    // Configura o formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'adm' && password === '123') {
                window.location.href = 'log.html';
            } else if (username === 'visitante' && password === 'visitante123') {
                window.location.href = 'visitante.html';
            } else {
                alert('Usuário ou senha inválidos!');
            }
        });
    }

    // Configura a data mínima no campo de data
    const dataInput = document.getElementById('data');
    if (dataInput) {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        const dataAtual = `${ano}-${mes}-${dia}`;
        dataInput.setAttribute('min', dataAtual);
    }

    // Função para exibir ou ocultar o campo de guias
    function mostrarGuias() {
        const precisaGuia = document.getElementById("precisaGuia").value;
        const guiaContainer = document.getElementById("guiaContainer");
        const guia = document.getElementById("guia");

        if (precisaGuia === "sim") {
            guiaContainer.style.display = "block"; // Mostra o campo de guias
            guia.innerHTML = `
                <option value="">-- Selecione um guia --</option>
                <option value="guia1">Carlos</option>
                <option value="guia2">Flavia</option>
                <option value="guia3">José</option>
            `;
        } else if (precisaGuia === "nao") {
            guiaContainer.style.display = "none"; // Oculta o campo de guias
        } else {
            guiaContainer.style.display = "none"; // Oculta o campo de guias
        }

        verificarCampos(); // Atualiza os campos de nome e telefone
    }

    // Função para verificar os campos obrigatórios
    function verificarCampos() {
        const precisaGuia = document.getElementById("precisaGuia").value;
        const guia = document.getElementById("guia").value;
        const horaInicio = document.getElementById("hora-inicio").value;
        const horaFim = document.getElementById("hora-fim").value;
        const contatoContainer = document.getElementById("contato-container");
        const nome = document.getElementById("nome");
        const telefone = document.getElementById("telefone");

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (
            horaInicio &&
            horaFim &&
            (precisaGuia === "nao" || (precisaGuia === "sim" && guia))
        ) {
            contatoContainer.style.display = "block"; // Exibe os campos de contato
            nome.disabled = false; // Habilita o campo de nome
            telefone.disabled = false; // Habilita o campo de telefone
        } else {
            contatoContainer.style.display = "none"; // Oculta os campos de contato
            nome.disabled = true; // Desabilita o campo de nome
            telefone.disabled = true; // Desabilita o campo de telefone
        }
    }

    // Adiciona eventos para verificar os campos
    document.getElementById("precisaGuia").addEventListener("change", mostrarGuias);
    document.getElementById("guia").addEventListener("change", verificarCampos);
    document.getElementById("hora-inicio").addEventListener("change", verificarCampos);
    document.getElementById("hora-fim").addEventListener("change", verificarCampos);

    // Configura o envio do formulário principal
    const form = document.querySelector('form'); // Seleciona o formulário principal
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Captura os valores preenchidos no formulário
            const experiencia = document.getElementById('experiencia').value;
            const parque = document.getElementById('parque').value;
            const data = document.getElementById('data').value;
            const horaInicio = document.getElementById('hora-inicio').value;
            const horaFim = document.getElementById('hora-fim').value;
            const visitantes = document.getElementById('visitantes').value;
            const precisaGuia = document.getElementById('precisaGuia').value;
            const guia = precisaGuia === 'sim' ? document.getElementById('guia').value : 'Nenhum guia necessário';
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;

            // Monta o resumo do agendamento
            const resumo = `
                
                <strong>Experiência:</strong> ${experiencia || 'Não informado'}<br>
                <strong>Parque:</strong> ${parque || 'Não informado'}<br>
                <strong>Data:</strong> ${data || 'Não informado'}<br>
                <strong>Horário:</strong> ${horaInicio || '--:--'} às ${horaFim || '--:--'}<br>
                <strong>Quantidade de Visitantes:</strong> ${visitantes || 'Não informado'}<br>
                <strong>Precisa de Guia:</strong> ${precisaGuia === 'sim' ? 'Sim' : 'Não'}<br>
                <strong>Guia:</strong> ${guia}<br>
                <strong>Nome:</strong> ${nome || 'Não informado'}<br>
                <strong>Telefone:</strong> ${telefone || 'Não informado'} <br> <br>
                <strong>Seu agendamento foi confirmado. <br> Para mais informações entre em contato conosco.</strong> <br>
                <strong>Telefone: 21 3333-4444 - e-mail: circuito@tereverde.com.br </strong>
            `;

            // Exibe o resumo no contêiner
            const resumoContainer = document.getElementById('resumo-container');
            const resumoElemento = document.getElementById('resumo');
            resumoElemento.innerHTML = resumo;
            resumoContainer.style.display = 'block'; // Torna o contêiner visível
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function (e) {
        let telefone = telefoneInput.value;

        // Remove todos os caracteres que não são números
        telefone = telefone.replace(/\D/g, '');

        // Aplica a formatação (XX) XXXXX-XXXX
        if (telefone.length > 10) {
            telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (telefone.length > 6) {
            telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (telefone.length > 2) {
            telefone = telefone.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            telefone = telefone.replace(/^(\d*)/, '($1');
        }

        // Atualiza o valor do campo com o formato aplicado
        telefoneInput.value = telefone;
    });
});
