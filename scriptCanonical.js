document.addEventListener('DOMContentLoaded', function () {
    const currentURL = new URL(window.location.href);
    const params = currentURL.searchParams;

    function getCanonicalURL() {
        if (params.has('p')) {
            const pageNumber = params.get('p');

            if (pageNumber === '1') {
                params.delete('p');
                currentURL.search = params.toString();
                return currentURL.origin + currentURL.pathname;
            } else {
                return currentURL.toString();
            }
        }
    }

    function addCanonicalLink() {
        const canonicalURL = getCanonicalURL();
        const linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        linkElement.href = canonicalURL;

        document.head.appendChild(linkElement);
        console.log('Canonical URL set to:', canonicalURL);
    }
    if(params.has('p')) {
    addCanonicalLink();
    }

});