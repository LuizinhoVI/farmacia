function filterTable() {
    const inputId = document.getElementById('filterId').value.toLowerCase();
    const inputNome = document.getElementById('filterNome').value;
    const inputStatus = document.getElementById('filterStatus').value.toLowerCase();
    const inputValor = document.getElementById('filterValor').value;
    const inputData = document.getElementById('filterData').value;
    const inputHora = document.getElementById('filterHora').value.toLowerCase();
    const inputTipo = document.getElementById('filterTipo').value.toLowerCase();

    const rows = document.querySelectorAll("#tabela tbody tr");

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const id = cells[0].textContent.toLowerCase();
        const nome = cells[1].textContent.toLowerCase();
        const status = cells[2].textContent.toLowerCase();
        const valor = cells[3].textContent.toLowerCase();
        const data = cells[4].textContent.toLowerCase();
        const hora = cells[5].textContent.toLowerCase();
        const tipo = cells[6].textContent.toLowerCase();

        // Mostrar ou esconder a linha com base no filtro
        if (id.includes(inputId) && nome.includes(inputNome) && status.includes(inputStatus) &&
            valor.includes(inputValor) && data.includes(inputData) && hora.includes(inputHora) &&
            tipo.includes(inputTipo)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
        
    });
}

function formatarValor(numero) {
    const nuem
    numero.value.replace(/\D/g, '');
    
    // let input = document.getElementById('filterValor');
    // let value = input.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    
    // // Se a string estiver vazia ou apenas com espaços
    // if (value === '00') {
    //     input.value = null;
    //     return;
    // }
    
    // // Formata o número para R$ 1.150,50 (inserindo ponto de milhar e vírgula para centavos)
    // let valorFormatado = '' + (parseInt(value) / 100).toFixed(2).replace('.', ',');
    
    // // Adiciona o ponto de milhar
    // valorFormatado = valorFormatado.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // input.value = valorFormatado; // Atualiza o campo com o valor 
    // console.log(input.value)
    

  
}