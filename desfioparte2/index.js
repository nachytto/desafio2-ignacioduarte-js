document.getElementById('calcular').addEventListener('click', () => {
    const cantidadSticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const cantidadSticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const cantidadSticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    const totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    const resultadoElemento = document.getElementById('resultado');
    if (totalStickers <= 10) {
        resultadoElemento.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        resultadoElemento.textContent = 'Llevas demasiados stickers.';
    }
});