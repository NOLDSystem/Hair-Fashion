let header = document.getElementById('cabecalho')
header.addEventListener('resize', () => {
    let container = document.getElementById('tudo')
    container.style.marginTop = header.clientHeight;
})