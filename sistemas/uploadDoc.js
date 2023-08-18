document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.querySelector('input[type="file"]');
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const saveButton = document.getElementById('saveButton');
    const fileNameInput = document.getElementById('fileNameInput');
    const documentList = document.querySelector('.document-list');
    
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmit = document.getElementById('passwordSubmit');
    const errorDialog = document.getElementById('errorDialog');

    // Deshabilitar el botón de selección de archivos inicialmente
    fileInput.disabled = true;

    // Manejar el envío de la contraseña
    passwordSubmit.addEventListener('click', function() {
        const password = passwordInput.value;

        // Verificar si la contraseña es correcta
        if (password === 'WindowsIsNotLinux!') {  
            // Habilitar el botón de selección de archivos
            fileInput.disabled = false;

            // Ocultar la sección de contraseña
            passwordInput.parentNode.style.display = 'none';
        } else {
            // Mostrar el cuadro de diálogo de error
            errorDialog.style.display = 'block';
            
            // Ocultar el cuadro de diálogo después de 2 segundos
            setTimeout(function() {
                errorDialog.style.display = 'none';
            }, 2000);
        }
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            modal.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    saveButton.addEventListener('click', function() {
        const selectedFile = fileInput.files[0];
        const fileName = fileNameInput.value || selectedFile.name;

        if (selectedFile && fileName) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = fileName;
            link.href = URL.createObjectURL(selectedFile);
            link.target = '_blank';
            listItem.appendChild(link);
            documentList.appendChild(listItem);

            // Limpia el campo de entrada de archivos y el nombre del documento
            fileInput.value = null;
            fileNameInput.value = '';

            // Cierra el modal
            modal.style.display = 'none';
        }
    });
});

