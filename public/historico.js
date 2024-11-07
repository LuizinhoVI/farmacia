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


