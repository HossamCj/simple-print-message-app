// Get elements into variables
const inputEl = document.getElementById('input')
const buttonEl = document.getElementById('btn')
const msgEl = document.getElementById('msg')


// Events
buttonEl.addEventListener('click', () => {
    // get values form input
    const inputValue = inputEl.value

    if (inputValue.length > 0) {
        // put the inputValue into the paragraph
        msgEl.innerHTML = inputValue
    
        // Clear the input
        inputValue.value = ""
    } else {
        alert('Please fill the input!')
    }


})