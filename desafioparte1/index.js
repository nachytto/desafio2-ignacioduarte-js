const imagen = document.getElementById('imagen');

        imagen.addEventListener('click', () => {
            if (imagen.style.border) {
                imagen.style.border = '';
            } else {
                imagen.style.border = '2px solid red';
            }
        });