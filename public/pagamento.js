function adicionar_mais() {
    
    const mais = document.getElementById("adicionar_produto")

    const copiar = mais.cloneNode(true);
    
    document.getElementById("colar").appendChild(copiar)
}
