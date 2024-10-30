let idCounter = 1; // Contador global de IDs

function cloneTable() {
    // Clonando a tabela
    const originalTable = document.querySelector('.ficha_tabela');
    const clone = originalTable.cloneNode(true);

    // Atualizando o ID no clone
    const contadorDeId = clone.querySelector('.contador_de_id');
    contadorDeId.textContent = ++idCounter; // Define o novo ID

    // Limpando os campos do clone
    const inputs = clone.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = ''; // Limpa os campos de entrada
    });

    // Adicionando o clone ao container
    document.getElementById('tabelaContainer').appendChild(clone); // Insere a nova tabela
}

function deleteTable(button) {
    const table = button.closest('.ficha_tabela'); // Encontra a tabela pai do botão
    table.remove(); // Remove a tabela

    // Atualiza os IDs das tabelas restantes
    updateTableIds();
}

function updateTableIds() {
    const tables = document.querySelectorAll('#tabelaContainer .ficha_tabela');
    
    // Reinicia o contador e atualiza os IDs
    tables.forEach((table, index) => {
        const contadorDeId = table.querySelector('.contador_de_id');
        contadorDeId.textContent = index + 1; // Atualiza o ID com base na nova ordem
    });
    idCounter = tables.length; // Atualiza o contador global com o número atual de tabelas
}