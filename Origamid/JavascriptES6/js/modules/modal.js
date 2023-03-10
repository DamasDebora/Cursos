export default function initModal() {

    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="close"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if(botaoAbrir && botaoFechar && containerModal){
        function toggleModal(e){
            e.preventDefault();
            containerModal.classList.toggle('ativo');
        }        
        function outsideClick(e){
            if(e.target === this){
                toggleModal(e);
            }
        }        
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', outsideClick)
    }
}

