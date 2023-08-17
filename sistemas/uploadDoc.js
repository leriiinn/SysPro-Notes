document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.querySelector('input[type="file"]');
    const documentList = document.querySelector('.document-list');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = file.name;
            link.href = '#'; // Agrega la lógica para acceder al documento aquí
            listItem.appendChild(link);
            documentList.appendChild(listItem);

            // Limpia el campo de entrada de archivos
            fileInput.value = null;
        }
    });
});
