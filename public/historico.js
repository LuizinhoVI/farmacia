 function filterTable() {
    const inputId = document.getElementById('filterId').value.toLowerCase();
    const inputNome = document.getElementById('filterNome').value;
    const inputStatus = document.getElementById('filterStatus').value;
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
           // console.log(status.includes(inputStatus))
      





    });
}
// função para formatar a data -------------------------------------------
function formatarData(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    
    if (valor.length <= 2) {
        input.value = valor; // Apenas o dia
    } else if (valor.length <= 4) {
        input.value = valor.slice(0, 2) + '/' + valor.slice(2); // Formato DD/MM
    } else {
        input.value = valor.slice(0, 2) + '/' + valor.slice(2, 4) + '/' + valor.slice(4, 6); // Formato DD/MM/AA
    }
}
// --------------------------------------------------------------------


function historico_selecionado(linha) {
    const abrir_cupom = document.querySelector('.cupom_de_pagamento')

    const cpf = document.querySelector('.historico_cpf')
    const nome_cupom = document.querySelector('.historico_nome_completo')
    const historico_status = document.querySelector('.historico_status')
    const valor = document.querySelector('.historico_valor')
    const data = document.querySelector('.historico_data')
    const hora = document.querySelector('.historico_hora')
    const tipo = document.querySelector('.historico_tipo')
    const limite = document.querySelector('.historico_limite')
    const valor_pagamento = document.querySelector('.historico_valor_da_ficha')
    // Obtém a célula da coluna "Nome" (que é a segunda célula da linha)
 
    
    cpf.innerHTML = linha.cells[0].innerHTML;
    nome_cupom.innerHTML = linha.cells[1].innerHTML;
    historico_status.innerHTML= linha.cells[2].innerHTML;
     valor.innerHTML = linha.cells[3].innerHTML;
     data.innerHTML = linha.cells[4].innerHTML;
     hora.innerHTML = linha.cells[5].innerHTML;
     tipo.innerHTML = linha.cells[6].innerHTML;
     limite.innerHTML = linha.cells[7].innerHTML;
     valor_pagamento.innerHTML = linha.cells[8].innerHTML;
    
    

    abrir_cupom.style.display="block";

  }

