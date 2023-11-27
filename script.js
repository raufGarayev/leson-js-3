const inputs = document.querySelectorAll('input')
const countrySelect = document.querySelector('select')
const submitBtn = document.querySelector('button')
const infoBlock = document.querySelector('.info')

submitBtn.addEventListener('click', function(e) {
    let infoText = document.querySelector('p')
    let formValue = document.querySelector('span')
    
    e.preventDefault()

    inputs.forEach(input => {
       
        if(!infoText && !formValue) {
            let infoText = document.createElement('p') //scope
            let formValue = document.createElement('span')
            formValue.innerText = `  ${input.value}`
            infoText.innerText = input.id.charAt(0).toUpperCase() + input.id.slice(1)
            infoBlock.appendChild(infoText) 
            infoText.appendChild(formValue)
        } else {
            formValue.innerText = `  ${input.value}`
            infoText.innerText = input.id.charAt(0).toUpperCase() + input.id.slice(1)
            infoBlock.appendChild(infoText)
            infoText.appendChild(formValue)
        }
    })

    let countryValue = document.createElement('span')

    if(!infoText) {
        let infoText = document.createElement('p')
        infoText.innerText = countrySelect.id.charAt(0).toUpperCase() + countrySelect.id.slice(1)
        countryValue.innerText = countrySelect.value
        infoBlock.appendChild(infoText)
        infoText.appendChild(countryValue)
    } else {
        infoText.innerText = countrySelect.id.charAt(0).toUpperCase() + countrySelect.id.slice(1)
        countryValue.innerText = `  ${countrySelect.value}`
        infoBlock.appendChild(infoText)
        infoText.appendChild(countryValue)
    }

    infoBlock.classList += "active"
})
