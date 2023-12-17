    // Função para rolar suavemente para uma determinada div com base na classe
    function scrollToDiv(className) {
        var targetDivs = document.querySelectorAll("." + className);

        // Verifica se pelo menos uma div com a classe fornecida foi encontrada
        if (targetDivs.length > 0) {
            // Rola suavemente até a primeira div encontrada
            targetDivs[0].scrollIntoView({ behavior: 'smooth' });
        }
    }
    

    // Adiciona um ouvinte de clique para os botões
    document.querySelector("button:nth-of-type(1)").addEventListener("click", function() {
        scrollToDiv('scrol01 scrol02 scrol03 scrol04');
    });



