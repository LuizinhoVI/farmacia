//const searchButton = document.getElementById('searchButton');
        const resultFrame = document.getElementById('resultadoframe').value;



        function menu_pesquisa() {
            
            const query = document.getElementById('resultadoframe').value;
            const url = `https://www.bing.com/images/search?q=`+query;
            resultFrame.src = url; // Atualiza o src do iframe para carregar os resultados
        console.log(   url );
        }
        