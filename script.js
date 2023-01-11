let button = document.querySelector('button')

function changePage() {
    window.location.assign('./2ndPage.html')
    setTimeout(() => {
        console.log('ciao')
    }, 5000);
}

button.addEventListener('click', changePage)