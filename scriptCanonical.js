document.addEventListener('DOMContentLoaded', function () {
    // Função para extrair a URL base removendo parâmetros, exceto para paginação
    function getCanonicalURL() {
        let currentURL = window.location.href;

        // Verifica se há parâmetros na URL
        if (currentURL.includes('?')) {
            // Obtém os parâmetros da URL
            let params = new URLSearchParams(window.location.search);

            // Verifica se o parâmetro "p" existe e se o valor é "1"
            if (params.has('p') && params.get('p') === '1') {
                // Remove apenas o parâmetro "p" se existir
                params.delete('p');
            }

            // Se não houver o parâmetro 'p', mas houver outros parâmetros, remova todos
            if (!params.has('p') && params.toString() !== '') {
                currentURL = currentURL.split('?')[0];
            }
        }

        return currentURL;
    }

    // Cria o elemento <link rel="canonical"> e adiciona ao <head>
    function addCanonicalLink() {
        let canonicalURL = getCanonicalURL();

        let linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        linkElement.href = canonicalURL;

        document.head.appendChild(linkElement);

        console.log('Canonical URL set to:', canonicalURL);
    }

    // Chamada da função ao carregar a página
    addCanonicalLink();
});