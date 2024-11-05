//const searchButton = document.getElementById('searchButton');
        const resultFrame = document.getElementById('iframe');


        
        function menu_pesquisa() {
            
            const query = document.getElementById('resultadoframe').value;
            const mostrar_pesquisa = document.querySelector('.local_de_pesquisa');

            if (query) {
            const url = `https://www.bing.com/images/search?q=`+query;
            resultFrame.src = url; // Atualiza o src do iframe para carregar os resultados
        console.log(   url );

        mostrar_pesquisa.style.display= 'block'
            
            
        }else{
            alert('Por favor, insira alguma pesquisa.');
        }

        }
      

        
            function realizarPesquisa(event) {
                if (event.key === 'Enter') {
                    
                    const query = document.getElementById('resultadoframe').value;
                    const mostrar_pesquisa = document.querySelector('.local_de_pesquisa');
        
                    if (query) {
                    const url = `https://www.bing.com/images/search?q=`+query;
                    resultFrame.src = url; // Atualiza o src do iframe para carregar os resultados
                console.log(   url );
        
                mostrar_pesquisa.style.display= 'block'
                    
                    
                }else{
                    alert('Por favor, insira alguma pesquisa.');
                }    
                
                }
            }
        
        function sair_da_pesquisa() {
             document.querySelector('.local_de_pesquisa').style.display='none';
        }