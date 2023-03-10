export default function initScrollAnim() {
    const sections = document.querySelectorAll('[data-anim="scroll"]');

    if(sections.length){
        const halfWindow = window.innerHeight * 0.6;

        function scrollAnim() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const visibleSection = (sectionTop - halfWindow) < 0;

                if(visibleSection)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');                
            })    
        }
       scrollAnim(); 
       window.addEventListener('scroll', scrollAnim);  
    }    
};