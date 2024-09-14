

const ham = document.querySelectorAll('.ham')

console.log(ham)

ham.forEach(button => {
    button.addEventListener('click', ()=>{
        document.querySelector('.mob').classList.toggle('hide')
    })
})