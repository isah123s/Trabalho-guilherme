function abrirModal(){
    const modal = document.getElementById('faq-janela');
    modal.classList.add('abrir')
    modal.addEventListener('click',(e) =>{
        if (e.target.id == 'fechar' || e.target.id == 'faq-janela') {
            modal.classList.remove('abrir')
        }
    })
}
function irparaEpc() {
    const epcSecao = document.getElementById('epc').offsetTop;
    window.scrollTo({top: epcSecao, behavior: 'smooth'});
}

function irparaHom() {
    const baseSecao = document.getElementById('base').offsetTop;
    window.scrollTo({top: baseSecao, behavior: 'smooth'});
}