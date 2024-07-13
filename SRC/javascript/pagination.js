// Define o número total de páginas
const totalPages = 15;

// Define o contêiner de paginação
const paginationContainer = document.getElementById('pagination-container');

// Função para obter o número da página atual
function getCurrentPage() {
    const pageMatch = window.location.pathname.match(/page(\d+)\.html/);
    return pageMatch ? parseInt(pageMatch[1]) : 1;
}

// Função para criar links de paginação
function createPagination(totalPages) {
    const currentPage = getCurrentPage();
    const maxVisiblePages = 5;
    let startPage = currentPage - Math.floor(maxVisiblePages / 2);
    let endPage = currentPage + Math.floor(maxVisiblePages / 2);

    if (startPage < 1) {
        startPage = 1;
        endPage = maxVisiblePages;
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - maxVisiblePages + 1;
    }

    // Assegurar que a página inicial não seja menor que 1
    startPage = Math.max(startPage, 1);

    // Cria o link "<<"
    const firstPageLink = document.createElement('a');
    firstPageLink.href = `page1.html`;
    firstPageLink.innerHTML = '<i class="fas fa-angle-double-left"></i>';
    paginationContainer.appendChild(firstPageLink);

    // Cria os links das páginas individuais
    for (let i = startPage; i <= endPage; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = `page${i}.html`;
        pageLink.textContent = i;
        pageLink.id = `page${i}`;

        // Define a classe ativa para a página atual
        if (i === currentPage) {
            pageLink.classList.add('active');
        }

        paginationContainer.appendChild(pageLink);
    }

    // Cria o link ">>"
    const lastPageLink = document.createElement('a');
    lastPageLink.href = `page${totalPages}.html`;
    lastPageLink.innerHTML = '<i class="fas fa-angle-double-right"></i>';
    paginationContainer.appendChild(lastPageLink);
}

// Função para adicionar animação de transição de página
function addPageTransitionAnimation() {
    const links = document.querySelectorAll('#pagination-container a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });

    document.body.classList.add('fade-in');
}

// Chama a função para criar a paginação
createPagination(totalPages);

// Adiciona animações de transição de página
addPageTransitionAnimation();
