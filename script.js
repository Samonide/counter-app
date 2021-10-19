const counts = document.querySelector('.counts')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e)=>{
    if(e.target.classList.contains('add')){
        counts.innerHTML++;
    }else if (e.target.classList.contains('reset')) {
        counts.innerHTML = 0;
        
    }else if (e.target.classList.contains('subtract')){
        counts.innerHTML--;
        
    }
})
