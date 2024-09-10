function abrirModal(){
    const modal = document.getElementById('faq-janela');
    modal.classList.add('abrir')
    modal.addEventListener('click',(e) =>{
        if (e.target.id == 'fechar' || e.target.id == 'faq-janela') {
            modal.classList.remove('abrir')
        }
    })
}
function irparaCtt(){
    const cttSecao = document.getElementById('ctt').offsetTop;
    window.scrollTo({top: cttSecao, behavior: 'smooth'});
}