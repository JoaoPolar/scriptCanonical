# Ajuste para o Canonical de paginações

Este script tem como objetivo inserir a tag `<link rel="canonical">` no `<head>` do seu documento HTML de forma inteligente, especialmente para lidar com URLs de paginação.

## Funcionalidades

* **Detecção de Parâmetro de Paginação:** O script procura pelo parâmetro `p` na URL. Você pode adaptar o nome do parâmetro na função `getCanonicalURL()` se sua loja ou site usar um nome diferente.
* **Canonicalização para a Primeira Página:** Se o parâmetro de paginação `p` existir e seu valor for `1` (ex: `?p=1`), o script define o canonical para a URL base, removendo o parâmetro de paginação. Isso evita conteúdo duplicado para a primeira página da paginação.
    * **Exemplo:** `https://www.seusite.com.br/produtos?p=1` terá como canonical `https://www.seusite.com.br/produtos`.
* **Canonicalização para Páginas de Paginação Subsequentes:** Se o parâmetro de paginação `p` existir e seu valor for maior que `1` (ex: `?p=2`), o script mantém o parâmetro na URL canonical.
    * **Exemplo:** `https://www.seusite.com.br/produtos?p=2` terá como canonical `https://www.seusite.com.br/produtos?p=2`.
* **Execução Segura:** O script aguarda o carregamento completo do DOM (`DOMContentLoaded`) antes de executar, garantindo que o elemento `<head>` esteja disponível.

## Como Usar

1.  **Salve o script:** Salve o código JavaScript em um arquivo chamado `canonical.js` (ou qualquer outro nome de sua preferência).

2.  **Linke o script no seu arquivo HTML (`index.html` ou outro):** Adicione a seguinte tag `<script>` dentro da seção `<head>` do seu arquivo HTML:

    ```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sua Página</title>
        <script src="canonical.js" defer></script>
        </head>
    <body>
        </body>
    </html>
    ```

    Certifique-se de que o caminho para o arquivo `canonical.js` no atributo `src` esteja correto em relação à localização do seu arquivo HTML. O atributo `defer` garante que o script seja executado após a análise do HTML.

## Personalização

* **Nome do Parâmetro de Paginação:** Se o seu sistema de paginação utiliza um parâmetro diferente de `p` (por exemplo, `page`, `pagina`), você precisará modificar a seguinte linha na função `getCanonicalURL()` dentro do arquivo `canonical.js`:

    ```javascript
    if (params.has('p')) {
    ```

    Substitua `'p'` pelo nome do parâmetro utilizado pelo seu sistema.

    ```javascript
    if (params.has('page')) { // Exemplo para o parâmetro 'page'
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs ou sugerir melhorias, ou enviar pull requests com suas alterações.

## Licença

[Adicione aqui sua licença (por exemplo, MIT License)](https://choosealicense.com/)
